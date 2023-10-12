import {Button, Input} from "@nextui-org/react";
import PhoneInput from "../inputs/phoneInput";
import EmailInput from "../inputs/emailInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function ScheduleForm({}) {

  return (
      <div className="bg-white p-8 w-[65%] rounded-3xl text-black">
        <div>
          <p className="text-xl text-center mb-3">
            Faça o seu <span className="font-bold">agendamento</span>
          </p>
          <hr  className="border-t-3 border-[#003366]"/>
        </div>
        <div className="mt-8">
          <Input className="my-5" variant="bordered" label="Nome Completo" />
          <PhoneInput />
          <EmailInput />
        </div>
        <div className="flex justify-center">
          <Button className="bg-[#cccc33] text-white" endContent={<FontAwesomeIcon icon={faPaperPlane}/>}>Enviar contato</Button>
        </div>
      </div>
  )
}