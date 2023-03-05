"use client";
//* Libraries imports
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

//* Componentss imports
import SearchInput from "@/components/common/SearchInput/SearchInput";

export default function DashboardSidebar() {
  return (
    <div className="flex flex-col h-full min-h-screen p-4 bg-gray-200 w-96">

      <h1 className='w-full text-4xl font-bold text-center'>Fatec Library</h1>

      <Accordion.Root
        type="multiple"
        className="w-full h-full flex flex-col justify-start items-start"
      >

        <Accordion.Item value="item-1" className="w-full p-1">
          <Accordion.Header className="w-full justify-start items-start">
            <Accordion.Trigger className="w-full justify-start items-start">
              <h2 className="text-2xl font-bold w-full text-start">Livros</h2>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent overflow-hidden flex flex-col justify-start items-start">
            <Button to="/dashboard/books/overview" txt="Visão geral" />
            <Button to="/dashboard/books/add" txt="Cadastrar livro" />
            <Button to="/dashboard/books/search" txt="Buscar livro" />
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" className="w-full p-1">
          <Accordion.Header className="w-full justify-start items-start">
            <Accordion.Trigger className="w-full justify-start items-start">
              <h2 className="text-2xl font-bold w-full text-start">Usuários</h2>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent overflow-hidden flex flex-col justify-start items-start">
            <Button to="/dashboard/users/overview" txt="Visão geral" />
            <Button to="/dashboard/users/signup" txt="Cadastrar usuário" />
            <Button to="/dashboard/users/search" txt="Buscar usuário" />
          </Accordion.Content>
        </Accordion.Item>

      </Accordion.Root>

    </div>
  )
}

type ButtonProps = {
  to: string;
  txt: string;
}

function Button(props: ButtonProps) {

  return (
    <Link href={props.to}>
      <button>
        {props.txt}
      </button>
    </Link>
  )
}