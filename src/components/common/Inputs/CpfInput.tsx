"use client";

//* Libralier imports
import { useEffect, useState } from "react";
import { IdentificationCard } from "phosphor-react";
import Cleave from "cleave.js/react";

//* Components imports
import InputHolder from "./InputHolder";

//* CPF

type CPFInputProps = {
  setCpf: (cpf: string) => void
}

export default function CpfInput(props: CPFInputProps) {
  const [tmpCpf, setTmpCpf] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);
  const [isCpfOk, setIsCpfOk] = useState<boolean>(false);

  useEffect(() => {
    setErros(validateCpf(tmpCpf).errors);
    props.setCpf(tmpCpf)
  }, [tmpCpf])

  return (
    <InputHolder
      thereAreErrors={erros.length > 0}
      errors={erros}
      label="CPF"
      labelFor="cpf"
    >
      <IdentificationCard size={28} className="text-gray-900" />
      <Cleave
        placeholder="123.123.123-12"
        className="w-full bg-transparent outline-none"
        onChange={(e) => { setTmpCpf(e.target.value) }}
        required
        type="text"
        options={{
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          numericOnly: true,
        }}
        id="cpf"
      />
    </InputHolder>
  );
}

function validateCpf(cpf: string) {

  return { errors: [] }
}