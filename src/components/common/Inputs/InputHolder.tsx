"use client";

//* Libralier imports
import type { ReactNode } from "react";

//* Hooks

type Props = {
  children: ReactNode;
  thereAreErrors?: boolean;
  errors?: string[];
  label: string;
  labelFor: string;
}

export default function InputHolder(props: Props) {

  return (
    <div className="flex flex-col w-full my-1">
      <label
        htmlFor={props.labelFor}
        className="w-full text-sm text-gray-800 text-start font-bold"
      >
        {props.label}
      </label>
      <div
        style={{
          borderColor: props.thereAreErrors ? "rgba(255,0,0,0.4)" : "rgba(0,0,0,0.2)"
        }}
        className="flex flex-row items-center justify-between gap-2 px-4 py-1 bg-white border rounded-lg w-72"
      >
        {props.children}
      </div>
      <div
        style={{
          display: props.thereAreErrors ? "flex" : "none",
          height: props.thereAreErrors ? "auto" : "0px"
        }}
        className="flex flex-col items-start justify-start gap-1 px-4 py-1 overflow-hidden transition-all duration-500 ease-in-out w-72"
      >
        {props.errors?.map((error, index) => (
          <p
            key={index}
            className="text-sm text-red-500"
          >{error}
          </p>
        ))}
      </div>
    </div>
  );
}