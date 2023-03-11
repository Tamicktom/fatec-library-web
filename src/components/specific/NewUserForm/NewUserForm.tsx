"use client";
import { useEffect, useState } from "react";

//* Components imports
import CepInput from "@/components/common/Inputs/CepInput";
import CpfInput from "@/components/common/Inputs/CpfInput";
import EmailInput from "@/components/common/Inputs/EmailInput";
import NameInput from "@/components/common/Inputs/NameInput";
import PasswordInput from "@/components/common/Inputs/PasswordInput";
import TelephoneInput from "@/components/common/Inputs/TelephoneInput";


export default function NewUserForm() {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  useEffect(() => {
    console.log({
      name, cpf, telephone, email, cep, password, rePassword
    });
  }, [name, cpf, telephone, email, cep, password, rePassword]);

  return (
    <div className="w-96 p-4 bg-white flex flex-col justify-center items-center rounded-lg gap-4">

      <h1 className="font-bold text-3xl">Cadastro de usuário</h1>
      <p className="w-72">Insira as informações do usuário que deseja cadastrar: </p>

      <div className="w-full flex flex-col justify-start items-center gap-2">
        <NameInput setName={setName} />
        <CpfInput setCpf={setCpf} />
        <CepInput setCep={setCep} />
        <TelephoneInput setTelephone={setTelephone} />
        <EmailInput setEmail={setEmail} />
        <PasswordInput setPassword={setPassword} />
        <PasswordInput setPassword={setRePassword} />
      </div>

      <button
        className="w-72 bg-blue-500 text-white rounded-lg p-2"
      >
        Cadastrar usuário
      </button>
    </div>
  );
}