"use client";

//* Componentss imports
import SearchInput from "@/components/common/SearchInput/SearchInput";

export default function DashboardNavbar() {
  return (
    <nav className="flex flex-row items-center justify-between w-full h-20 px-8 bg-gray-100">
      <h1 className='text-3xl font-bold'>Fatec Library</h1>
      <div className="flex flex-row items-center justify-end gap-8">
        <SearchInput />
      </div>
    </nav>
  )
}