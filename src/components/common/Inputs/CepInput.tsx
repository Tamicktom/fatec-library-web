"use client";

//* Libraries imports
import { useState, useEffect } from "react";
import { MapPin } from "phosphor-react";
import Cleave from "cleave.js/react";

//* Components imports
import InputHolder from "./InputHolder";

//* Hooks
import useCep from "@/hooks/common/useCep";

//* CEP

type CepInputProps = {
  setCep: (telephone: string) => void
}

/**
 * Input for CEP. It uses Cleave to format the input and validate it. It also uses a custom hook to validate the CEP.
 * 
 * @param setCep Function to set the CEP in the parent component
 * @returns CEP input component
 */

export default function CepInput(props: CepInputProps) {
  const [tmpCep, setCep] = useState<string>("");
  const { erros, cep, isCepOk } = useCep(tmpCep);

  const handleChange = (e: string) => {
    setCep(e);
  }

  useEffect(() => {
    if (isCepOk) {
      props.setCep(cep);
    }
  }, [cep]);

  return (
    <InputHolder
      thereAreErrors={erros.length > 0}
      errors={erros}
    >
      <MapPin size={28} className="text-gray-900" />
      <Cleave
        placeholder="cep"
        className="outline-none bg-transparent w-full"
        onChange={(e) => { handleChange(e.target.value) }}
        required
        type="tel"
        options={{
          numericOnly: true,
          delimiters: ["-"],
          blocks: [5, 3]
        }}
      />
    </InputHolder>
  );
}

