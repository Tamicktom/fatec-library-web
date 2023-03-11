"use client";

//* Libraries imports
import { useEffect, useState, useId } from "react";
import { Lock } from "phosphor-react";

//* Components imports
import InputHolder from "./InputHolder";

//* Password
type PasswordInputProps = {
  setPassword: (pass: string) => void
  setErrors: (errors:string[]) => void
}

export default function PasswordInput(props: PasswordInputProps) {
  const [tmpPassword, setTmpPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const id = useId();

  useEffect(() => {
    setErrors(validatePassword(tmpPassword).errors);
    if (tmpPassword.length > 0) {
      props.setPassword(tmpPassword);
    }
  }, [tmpPassword]);

  useEffect(()=>{
    props.setErrors(errors);
  }, [errors]);

  return (
    <InputHolder
      thereAreErrors={errors.length > 0}
      errors={errors}
      label="Senha"
      labelFor={id}
    >
      <Lock size={28} className="text-gray-900" />
      <input
        className="w-full bg-transparent outline-none"
        type="password"
        onChange={(e) => { setTmpPassword(e.target.value) }}
        placeholder="************"
        required
        id={id}
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