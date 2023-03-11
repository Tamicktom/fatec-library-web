"use client";

//* Libraries imports
import { useEffect, useState } from "react";
import { Phone } from "phosphor-react";
import "cleave.js/dist/addons/cleave-phone.br";
import Cleave from "cleave.js/react";

//* Components imports
import InputHolder from "./InputHolder";

//* Telefone
type TelephoneInputProps = {
  setTelephone: (telephone: string) => void
  setErrors: (errors:string[]) => void
}

export default function TelephoneInput(props: TelephoneInputProps) {
  const [tmpTelephone, setTelephone] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);
  const [isTelephoneValid, setIsTelephoneValid] = useState<boolean>(false);

  useEffect(() => {
    setErros(validateTelephone(tmpTelephone).errors);
    props.setTelephone(tmpTelephone);
  }, [tmpTelephone]);

  useEffect(()=>{
    props.setErrors(erros);
  }, [erros]);

  return (
    <InputHolder
      thereAreErrors={erros.length > 0}
      errors={erros}
      label="Telefone"
      labelFor="telephone"
    >
      <Phone size={28} className="text-gray-900" />
      <Cleave
        placeholder="99 12345 1234"
        className="outline-none bg-transparent w-full"
        onChange={(e) => { setTelephone(e.target.value) }}
        required
        type="tel"
        options={{
          numericOnly: true,
          phone: true,
          phoneRegionCode: 'BR',
        }}
        id="telephone"
      />
    </InputHolder>
  );
}

function validateTelephone(telephone: string) {
  if (telephone.length === 0) return { errors: [] }
  const number = telephone.replaceAll(" ", "").replaceAll("-", "");
  if (number.length < 11) {
    return { errors: ["Telefone inválido"] }
  }

  return { errors: [] }
}