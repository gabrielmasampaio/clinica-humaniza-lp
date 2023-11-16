import {Button, Input} from "@nextui-org/react";
import PhoneInput from "../inputs/phoneInput";
import EmailInput from "../inputs/emailInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {formatScheduleMessage, getWhatsappUrl} from "../../lib/message";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function ScheduleForm() {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSubmit = () => {
    // Create an object with the input values
    const formData = {
      fullName,
      phoneNumber,
      email,
    };

    const message = formatScheduleMessage(formData);
    const whatsappUrl = getWhatsappUrl(message);
    window.open(whatsappUrl, '_blank');
  }


  return (
      <div className="bg-white p-8 w-[75%] rounded-3xl text-black">
        <div>
          <p className="text-xl text-center mb-3">
            Faça o seu <span className="font-bold">agendamento</span>
          </p>
          <hr  className="border-t-3 border-[#003366]"/>
        </div>
        <div className="mt-6">
          <Input className="my-3" variant="bordered" value={fullName}
                 onChange={handleFullNameChange} label="Nome Completo" />
          <PhoneInput onChange={(phone) => setPhoneNumber(phone)} />
          <EmailInput onChange={(email) => setEmail(email)}/>
        </div>
        <div className="flex justify-center">
          <Button className="bg-[#cccc33] text-white" onClick={handleSubmit} endContent={<FontAwesomeIcon size="xl" icon={faWhatsapp}/>}>Entrar em contato</Button>
        </div>
      </div>
  )
}