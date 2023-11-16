import {Input} from "@nextui-org/react";
import {useMemo, useState} from "react";



export default function EmailInput({onChange}){
  const [value, setValue] = useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return !validateEmail(value);
  }, [value]);


  return (
      <Input
          className="my-3"
          value={value}
          type="email"
          label="E-mail"
          variant="bordered"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage={isInvalid && "E-mail inválido"}
          onValueChange={(value) => {onChange(value)
            setValue(value)}}
      />
  );
}