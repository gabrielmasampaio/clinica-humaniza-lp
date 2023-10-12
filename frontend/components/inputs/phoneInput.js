import {Input} from "@nextui-org/react";
import {useState} from "react";



export default function PhoneInput(){
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters from the input
    const numericValue = input.replace(/\D/g, '');

    // Use regular expressions to format the phone number as (DD) 9XXXX-XXXX or (DD) XXXX-XXXX
    const formattedNumber = numericValue.replace(
        /(\d{2})(\d{1,5})(\d{4})/,
        '($1) $2-$3'
    );

    return formattedNumber;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  return (
      <Input
          className="my-5"
          type="text"
          variant="bordered"
          label="Telefone"
          value={phoneNumber}
          onChange={handleInputChange}
      />
  );
}