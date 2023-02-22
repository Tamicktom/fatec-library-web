"use client";

//* Libraries imports
import { MagnifyingGlass } from 'phosphor-react';

type Props = {}

export default function Navbar({ }: Props) {

  return (
    <div className="flex flex-row items-center justify-between w-full h-32 px-8">
      <h1 className='text-4xl font-bold'>Fatec Library</h1>
      <div className="flex flex-row items-center justify-end gap-8">
        <SearchInput />
      </div>
    </div>
  )
}

function SearchInput() {
  return (
    <div className="flex flex-row w-[300px] items-center justify-between px-4 bg-white rounded-2xl">
      <input
        className="w-full h-full py-2 bg-transparent focus:outline-none"
        placeholder='Busque aqui'
        type="text"
      />
      <MagnifyingGlass size={24} />
    </div>
  );
}