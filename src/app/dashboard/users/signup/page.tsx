"use client";
import { Envelope, User, Lock, IdentificationCard, MapPin, Phone } from "phosphor-react";
import { useState, useEffect } from "react";
import "cleave.js/dist/addons/cleave-phone.br";
import Cleave from 'cleave.js/react';

/**
 * Screen to add users to the library
 */

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-96 p-4 bg-white flex flex-col justify-center items-center rounded-lg gap-4">

        <h1>Cadastro de usuário</h1>
        <p>Insira as informações do usuário que deseja cadastrar: </p>


        <NameInput setName={setName} />
        <CpfInput setCpf={setCpf} />
        <TelephoneInput setTelephone={setTelephone} />
        <EmailInput setEmail={setEmail} />
        <CepInput setCep={setCep} />
        <PasswordInput setPassword={setPassword} />
        <PasswordInput setPassword={setRePassword} />

        <button>
          Cadastrar usuário
        </button>
      </div>
    </div>
  );
}

//* CEP

type CepInputProps = {
  setCep: (telephone: string) => void
}

function CepInput(props: CepInputProps) {
  const [tmpCep, setCep] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);
  const [isTelephoneOk, setTelephoneOk] = useState<boolean>(false);

  useEffect(() => {
    setErros(validateCep(tmpCep).errors);
  }, [])

  return (
    <div className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72">
      <MapPin size={28} className="text-gray-900" />
      <Cleave
        placeholder="99 12345 1234"
        className="outline-none bg-transparent w-full"
        onChange={(e) => { setCep(e.target.value) }}
        required
        type="tel"
        options={{
          numericOnly: true,
          delimiters: ["-"],
          blocks: [5, 3]
        }}
      />
    </div>
  );
}

function validateCep(cep: string) {


  return { errors: [] }
}





//* Telefone
type TelephoneInputProps = {
  setTelephone: (telephone: string) => void
}

function TelephoneInput(props: TelephoneInputProps) {
  const [tmpTelephone, setTelephone] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);
  const [isTelephoneOk, setTelephoneOk] = useState<boolean>(false);

  useEffect(() => {
    setErros(validateTelephone(tmpTelephone).errors);
  }, [])

  return (
    <div className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72">
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
          phoneRegionCode: 'BR'
        }}
      />
    </div>
  );
}

function validateTelephone(telephone: string) {


  return { errors: [] }
}


//* CPF

type CPFInputProps = {
  setCpf: (cpf: string) => void
}

function CpfInput(props: CPFInputProps) {
  const [tmpCpf, setTmpCpf] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);
  const [isCpfOk, setIsCpfOk] = useState<boolean>(false);

  useEffect(() => {
    setErros(validateCpf(tmpCpf).errors);
  }, [])

  return (
    <div className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72">
      <IdentificationCard size={28} className="text-gray-900" />
      <Cleave
        placeholder="123.123.123-12"
        className="outline-none bg-transparent w-full"
        onChange={(e) => { setTmpCpf(e.target.value) }}
        required
        type="text"
        options={{
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          numericOnly: true,
        }}
      />
    </div>
  );
}

function validateCpf(cpf: string) {

  return { errors: [] }
}

//* User name input
type NameInputProps = {
  setName: (title: string) => void
}

function NameInput(props: NameInputProps) {
  const [tmpName, setTmpName] = useState<string>("");
  const [erros, setErros] = useState<string[]>([]);
  const [isNameOk, setIsNameOk] = useState<boolean>(false);

  useEffect(() => {
    setErros(validateName(tmpName).errors);
  }, [])

  return (
    <div className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72">
      <User size={28} className="text-gray-900" />
      <input
        className="outline-none bg-transparent w-full"
        type="text"
        onChange={(e) => { setTmpName(e.target.value) }}
        placeholder="Nome do usuário"
        required
      />
    </div>
  );
}

function validateName(name: string) {

  return { errors: [] }
}


//* Email Input

type EmailInputProps = {
  setEmail: (email: string) => void
}

function EmailInput(props: EmailInputProps) {
  const [tmpEmail, setTmpEmail] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isEmailOk, setIsEmailOk] = useState<boolean>(false);

  useEffect(() => {
    setErrors(validateEmail(tmpEmail).errors);
  }, [tmpEmail]);

  return (
    <div className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72">
      <Envelope size={28} className="text-gray-900" />
      <input
        className="outline-none bg-transparent w-full"
        type="email"
        onChange={(e) => { setTmpEmail(e.target.value) }}
        placeholder="exemplo@exemplo.com"
        required
      />
    </div>
  );
}

function validateEmail(email: string) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const isEmailOk = emailRegex.test(email);
  if (isEmailOk)
    return { errors: [] }
  return { errors: ["email inválido"] }
}



//* Password
type PasswordInputProps = {
  setPassword: (pass: string) => void
}

function PasswordInput(props: PasswordInputProps) {
  const [tmpPassword, setTmpPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isPasswordOk, setIsPasswordOk] = useState<boolean>(false);

  useEffect(() => {
    setErrors(validatePassword(tmpPassword).errors);
  }, [tmpPassword]);

  return (
    <div className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72">
      <Lock size={28} className="text-gray-900" />
      <input
        className="outline-none bg-transparent w-full"
        type="password"
        onChange={(e) => { setTmpPassword(e.target.value) }}
        placeholder="************"
        required
      />
    </div>
  )
}

function validatePassword(password: string) {


  return { errors: [] }
}