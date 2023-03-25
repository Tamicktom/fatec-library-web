"use client";

//* Libraries imports
import { useEffect, useState, useId } from "react";
import { NumberOne } from "phosphor-react";

//* Components imports
import InputHolder from "./InputHolder";

//* Number
type NumberInputProps = {
  setNumber: (number: number) => void
  setErrors: (errors: string[]) => void
  value?: number;
  label: string;
}

export default function NumberInput(props: NumberInputProps) {
  const [tmpNumber, setNumber] = useState<number>(0);
  const [erros, setErros] = useState<string[]>([]);

  const id = useId();

  useEffect(() => {
    setErros(validateNumber(tmpNumber).errors);
    props.setNumber(tmpNumber);
  }, [tmpNumber]);

  return (
    <InputHolder
      thereAreErrors={erros.length > 0}
      errors={erros}
      label={props.label}
      labelFor={props.label + id}
    >
      <NumberOne size={28} className="text-gray-900" />
      <input
        value={props.value}
        placeholder="1234"
        className="outline-none bg-transparent w-full"
        onChange={(e) => { setNumber(Number(e.target.value)) }}
        required
        type="number"
        id={props.label + id}
      />
    </InputHolder>
  );
}

function validateNumber(number: number) {
  const regex = new RegExp("^[0-9]+$");
  if (number.toString().length === 0) return { errors: [] }
  if (!regex.test(number.toString())) {
    return { errors: ["O número deve conter apenas números."] }
  }
  return { errors: [] }
}