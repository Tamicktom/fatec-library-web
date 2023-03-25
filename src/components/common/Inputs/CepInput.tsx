"use client";

//* Libraries imports
import { useState, useEffect } from "react";
import { MapPin } from "phosphor-react";
import Cleave from "cleave.js/react";

//* Components imports
import InputHolder from "./InputHolder";

//* Hooks
import useCep from "pnpm/hooks/common/useCep";

//* CEP

type CepInputProps = {
  setCep: (telephone: string) => void
  setErrors: (errors: string[]) => void
  setAdress: (neighbourhood: string, street: string, city: string, state: string) => void
}

/**
 * Input for CEP. It uses Cleave to format the input and validate it. It also uses a custom hook to validate the CEP.
 * 
 * @param setCep Function to set the CEP in the parent component
 * @returns CEP input component
 */

export default function CepInput(props: CepInputProps) {
  const [tmpCep, setCep] = useState<string>("");
  const { errors, cepData, cep, isCepOk } = useCep(tmpCep);

  const handleChange = (e: string) => {
    setCep(e);
  }

  useEffect(() => {
    if (isCepOk) {
      props.setCep(cep);

    }
  }, [cep]);

  useEffect(() => {
    if (isCepOk) {
      if (cepData) {
        console.log("CEP DATA: ", cepData);
        props.setAdress(cepData.bairro, cepData.logradouro, cepData.localidade, cepData.uf)
      }
    }
  }, [cepData]);

  useEffect(() => {
    props.setErrors(errors);
  }, [errors]);

  return (
    <InputHolder
      thereAreErrors={errors.length > 0}
      errors={errors}
      label="CEP"
      labelFor="cep"
    >
      <MapPin size={28} className="text-gray-900" />
      <Cleave
        placeholder="cep"
        className="w-full bg-transparent outline-none"
        onChange={(e) => { handleChange(e.target.value) }}
        required
        type="tel"
        options={{
          numericOnly: true,
          delimiters: ["-"],
          blocks: [5, 3]
        }}
        id="cep"
      />
    </InputHolder>
  );
}