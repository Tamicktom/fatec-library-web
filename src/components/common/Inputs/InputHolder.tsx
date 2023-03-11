"use client";

//* Libralier imports
import type { ReactNode } from "react";

//* Hooks

type Props = {
  children: ReactNode;
  thereAreErrors: boolean;
  errors?: string[];
}

export default function InputHolder(props: Props) {

  return (
    <>
      <div
        style={{
          borderColor: props.thereAreErrors ? "red" : "black"
        }}
        className="px-4 py-1 rounded-lg bg-white flex flex-row justify-between items-center gap-2 w-72 border"
      >
        {props.children}
      </div>
      <div
        style={{
          display: props.thereAreErrors ? "flex" : "none",
          height: props.thereAreErrors ? "auto" : "0px"
        }}
        className="w-72 px-4 py-1 flex flex-col justify-start items-start gap-1 overflow-hidden transition-all duration-500 ease-in-out"
      >
        {props.errors?.map((error, index) => (
          <p
            key={index}
            className="text-red-500 text-sm"
          >{error}
          </p>
        ))}
      </div>
    </>
  );
}