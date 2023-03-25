"use client";

//* Libraries imports
import { useEffect, useState, useId } from "react";
import { NumberOne } from "phosphor-react";
import "cleave.js/dist/addons/cleave-phone.br";

//* Components imports
import InputHolder from "./InputHolder";

//* Telefone
type TextInputProps = {
  setText: (text: string) => void
  value: string;
  label: string;
  min: number;
  max: number;
}

export default function TextInput(props: TextInputProps) {
  const [tmpText, setText] = useState<string>("");

  const id = useId();

  useEffect(() => {
    props.setText(tmpText);
  }, [tmpText]);

  return (
    <InputHolder
      label={props.label}
      labelFor={props.label + id}
    >
      <input
        value={props.value}
        placeholder="1234"
        className="outline-none bg-transparent w-full"
        onChange={(e) => { setText(e.target.value) }}
        required
        type="text"
        id={props.label + id}
      />
    </InputHolder>
  );
}
