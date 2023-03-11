"use client";

//* Libraries imports
import { useEffect, useState } from "react";
import { Lock } from "phosphor-react";

//* Components imports
import InputHolder from "./InputHolder";

//* Password
type PasswordInputProps = {
  setPassword: (pass: string) => void
}

export default function PasswordInput(props: PasswordInputProps) {
  const [tmpPassword, setTmpPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setErrors(validatePassword(tmpPassword).errors);
    if (errors.length === 0) {
      if (tmpPassword.length > 0) {
        props.setPassword(tmpPassword);
      }
    }
  }, [tmpPassword]);

  return (
    <InputHolder
      thereAreErrors={errors.length > 0}
      errors={errors}
    >
      <Lock size={28} className="text-gray-900" />
      <input
        className="outline-none bg-transparent w-full"
        type="password"
        onChange={(e) => { setTmpPassword(e.target.value) }}
        placeholder="************"
        required
      />
    </InputHolder>
  )
}

function validatePassword(password: string) {
  if (password.length === 0) return { errors: [] };

  const errors: string[] = [];
  const containsNumber = /\d/;
  const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const containsUpperCase = /[A-Z]/;
  const containsLowerCase = /[a-z]/;

  if (password.length < 8) {
    errors.push("A senha deve ter no mínimo 8 caracteres");
  }

  if (!containsNumber.test(password)) errors.push("A senha deve conter pelo menos um número");
  if (!containsSpecialChar.test(password)) errors.push("A senha deve conter pelo menos um caractere especial");
  if (!containsUpperCase.test(password)) errors.push("A senha deve conter pelo menos uma letra maiúscula");
  if (!containsLowerCase.test(password)) errors.push("A senha deve conter pelo menos uma letra minúscula");

  return { errors }
}