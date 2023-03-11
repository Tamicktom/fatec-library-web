"use client";

//* Libraries imports
import { useEffect, useState } from "react";
import { Envelope } from "phosphor-react";

//* Components imports
import InputHolder from "./InputHolder";

//* Email Input

type EmailInputProps = {
  setEmail: (email: string) => void
}

export default function EmailInput(props: EmailInputProps) {
  const [tmpEmail, setTmpEmail] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setErrors(validateEmail(tmpEmail).errors);
    props.setEmail(tmpEmail);
  }, [tmpEmail]);

  return (
    <InputHolder
      thereAreErrors={errors.length > 0}
      errors={errors}
      label="Email"
      labelFor="email"
    >
      <Envelope size={28} className="text-gray-900" />
      <input
        className="w-full bg-transparent outline-none"
        type="email"
        onChange={(e) => { setTmpEmail(e.target.value) }}
        placeholder="exemplo@exemplo.com"
        required
        id="email"
      />
    </InputHolder>
  );
}

function validateEmail(email: string) {
  if (email.length === 0) return { errors: [] };
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isEmailOk = emailRegex.test(email);
  if (isEmailOk)
    return { errors: [] }
  return { errors: ["email inválido"] }
}