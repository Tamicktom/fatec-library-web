"use client";
//* Libraries imports
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

export default function DashboardSidebar() {

  return (
    <div className="flex flex-col h-full min-h-screen p-4 bg-gray-200 min-w-[300px]">

      <h1 className='w-full text-4xl font-bold text-center'>Fatec Library</h1>

      <Accordion.Root
        type="multiple"
        className="flex flex-col items-start justify-start w-full h-full gap-2 mt-8"
      >

        <Accordion.Item value="item-1" className="w-full p-2 border border-black/10 rounded-xl">
          <Accordion.Header className="items-start justify-start w-full">
            <Accordion.Trigger className="items-start justify-start w-full">
              <h2 className="w-full text-2xl font-bold text-start">Livros</h2>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="flex flex-col items-start justify-start bg-gray-300/10 AccordionContent">
            <Button to="/dashboard/books/overview" txt="Visão geral" />
            <Button to="/dashboard/books/add" txt="Cadastrar livro" />
            <Button to="/dashboard/books/search" txt="Buscar livro" />
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="w-full p-2 border border-black/10 rounded-xl">
          <Accordion.Header className="items-start justify-start w-full">
            <Accordion.Trigger className="items-start justify-start w-full">
              <h2 className="w-full text-2xl font-bold text-start">Usuários</h2>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="flex flex-col items-start justify-start w-full bg-gray-300/10 AccordionContent">
            <Button to="/dashboard/users/overview" txt="Visão geral" />
            <Button to="/dashboard/users/signup" txt="Cadastrar usuário" />
            <Button to="/dashboard/users/search" txt="Buscar usuário" />
          </Accordion.Content>
        </Accordion.Item>

      </Accordion.Root>

      <Link href="/">
        <button className="w-full p-2 mt-4 text-sm font-bold text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Ir para o site
        </button>
      </Link>

    </div>
  )
}

type ButtonProps = {
  to: string;
  txt: string;
}

function Button(props: ButtonProps) {

  return (
    <Link href={props.to} className="flex flex-row items-center justify-start w-full px-4 py-2 rounded-lg hover:bg-gray-300/50">
      <button className="w-full h-full font-bold text-start">
        {props.txt}
      </button>
    </Link>
  )
}