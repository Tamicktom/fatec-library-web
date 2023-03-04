"use client";

//* Libraries imports
import SearchInput from "../SearchInput/SearchInput";

type Props = {}

export default function Navbar({ }: Props) {

  return (
    <nav className="flex flex-row items-center justify-between w-full h-32 px-8">
      <h1 className='text-4xl font-bold'>Fatec Library</h1>
      <div className="flex flex-row items-center justify-end gap-8">
        <SearchInput />
      </div>
    </nav>
  )
}

