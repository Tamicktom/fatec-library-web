//* Libraries imports
import { useState, useEffect } from "react";
import { Book, BookmarkSimple, User, Door, UserCircle } from "phosphor-react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

//* Store
import userStore, { type UserCredentials } from "../../../store/user";

type Props = {

}

export default function Sidebar(props: Props) {
  return (
    <div className='flex flex-col items-center justify-start h-full py-4 min-w-[300px]'>
      <Login />
      <NavbarOptions />
    </div>
  );
}

function NavbarOptions() {
  return (
    <div className="flex flex-col w-full gap-4 px-4 py-12">
      <button className="flex flex-row items-center justify-start w-full gap-4 py-2 rounded-lg hover:bg-gray-200/50">
        <Book className="text-gray-700" size={28} />
        <span className="text-lg font-bold text-gray-800">Meus livros</span>
      </button>
      <button className="flex flex-row items-center justify-start w-full gap-4 py-2 rounded-lg hover:bg-gray-200/50">
        <BookmarkSimple className="text-gray-700" size={28} />
        <span className="text-lg font-bold text-gray-800">Lista de desejos</span>
      </button>
      <button className="flex flex-row items-center justify-start w-full gap-4 py-2 rounded-lg hover:bg-gray-200/50">
        <User className="text-gray-700" size={28} />
        <span className="text-lg font-bold text-gray-800">Perfil</span>
      </button>
      <button className="flex flex-row items-center justify-start w-full gap-4 py-2 rounded-lg hover:bg-gray-200/50">
        <Door className="text-gray-700" size={28} />
        <span className="text-lg font-bold text-gray-800">LogOut</span>
      </button>
    </div>
  );
}

function Login() {
  const sesstion = useSession();

  return (
    <div className="w-full flex flex-rol justify-center items-center p-8">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        {
          sesstion?.data?.user?.image
            ? <img
              className="w-24 h-24 rounded-full"
              src={sesstion.data.user.image}
              alt="User Avatar"
            />
            : <UserCircle className="text-gray-700" size={100} />
        }
        <span className="text-2xl text-center font-bold text-gray-800">
          {
            sesstion?.data?.user
              ?`Welcome, ${sesstion.data.user.name}`
              : "Login"
          }
        </span>
        <button
          className="flex flex-row items-center justify-center w-full gap-4 py-2 rounded-lg hover:bg-gray-200/50"
          onClick={() => {
            if (sesstion.data?.user) {
              signOut();
            } else {
              signIn();
            }
          }}
        >
          <Door className="text-gray-700" size={28} />
          <span className="text-lg font-bold text-gray-800">
            {sesstion.data?.user ? "LogOut" : "Login"}
          </span>
        </button>
      </div>
    </div>
  );
}