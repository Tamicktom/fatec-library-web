"use client";

//* Libraries imports
import { useEffect, useState } from "react";
import { User } from "phosphor-react";

//* Components imports
import InputHolder from "./InputHolder";

//* User name input
type NameInputProps = {
  setName: (title: string) => void
}

export default function NameInput(props: NameInputProps) {
  const [tmpName, setTmpName] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);

  useEffect(() => {
    setErros(validateName(tmpName).errors);
    if (erros.length === 0) {
      props.setName(tmpName);
    }
  }, [tmpName]);

  return (
    <InputHolder
      thereAreErrors={erros.length > 0}
      errors={erros}
      label="Nome"
      labelFor="name"
    >
      <User size={28} className="text-gray-900" />
      <input
        className="w-full bg-transparent outline-none"
        type="text"
        id="name"
        onChange={(e) => { setTmpName(e.target.value) }}
        placeholder="Nome do usuário"
        required
      />
    </InputHolder>
  );
}

function validateName(name: string) {
  if (name.length === 0) return { errors: [] };

  const nameTrimmed = name.trim();

  const errors: string[] = [];

  const containsNumber = /\d/;
  const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const containsLastName = /\s/;

  if (nameTrimmed.length < 3) errors.push("Nome muito curto");
  if (nameTrimmed.length > 255) errors.push("Nome muito longo");

  //name must not contain numbers and special characters
  if (containsNumber.test(nameTrimmed)) errors.push("Nome não pode conter números");
  if (containsSpecialChar.test(nameTrimmed)) errors.push("Nome não pode conter caracteres especiais");

  //name must have a first name and a last name
  if (!containsLastName.test(nameTrimmed)) errors.push("Nome deve conter primeiro nome e sobrenome");

  return { errors };
}