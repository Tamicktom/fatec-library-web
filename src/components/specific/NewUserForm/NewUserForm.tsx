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

  return (
    <div className="flex flex-col items-center justify-center w-auto gap-8 p-8 bg-gray-100 rounded-lg">

      <div className="flex flex-col items-start justify-start mb-4 text-center">
        <h1 className="text-3xl font-bold">Cadastro de usuário</h1>
        <p className="w-72">Insira as informações do usuário que deseja cadastrar: </p>
      </div>

      <div className="flex flex-col items-center justify-start w-full gap-2">
        <NameInput setName={setName} />
        <CpfInput setCpf={setCpf} />
        <CepInput setCep={setCep} />
        <TelephoneInput setTelephone={setTelephone} />
        <EmailInput setEmail={setEmail} />
        <PasswordInput setPassword={setPassword} />
        <PasswordInput setPassword={setRePassword} />
      </div>

      <button
        className="p-2 mt-4 text-sm font-bold text-white rounded-lg w-72 bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Cadastrar usuário
      </button>
    </div>
  );
}