"use client";

//* Libraries imports
import SearchInput from "../SearchInput/SearchInput";

type Props = {}

export default function Navbar({ }: Props) {

  return (
    <nav className="flex flex-row items-start justify-start w-full h-32 px-8">
      <div className="flex flex-row items-center justify-between w-5/6 h-full">
        <h1 className='text-4xl font-bold'>Fatec Library</h1>
        <div className="flex flex-row items-center justify-end gap-8">
          <SearchInput />
        </div>
      </div>
    </nav>
  )
}

