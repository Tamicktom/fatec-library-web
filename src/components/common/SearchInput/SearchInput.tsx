import { MagnifyingGlass } from "phosphor-react";


export default function SearchInput() {
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