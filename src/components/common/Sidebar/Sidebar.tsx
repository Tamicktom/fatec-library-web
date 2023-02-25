"use client";
//* Libraries imports
import { useState, useEffect } from "react";
import { Book, BookmarkSimple, User, Door } from "phosphor-react";

type Props = {

}

export default function Sidebar(props: Props) {
  return (
    <div className='flex flex-col items-center justify-start h-full py-4 w-96'>
      <Login />
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
    </div>
  );
}

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-200/50">
      {
        isLogged
          ?
          <div className="flex items-center justify-start gap-4 flexx-row">
            <img className="w-16 h-16 rounded-full" src="https://avatars.githubusercontent.com/u/4256471?v=4" alt="Avatar" />
            <span className="text-xl font-bold text-gray-900"> Olá, {loginCredentials.email} </span>
          </div>
          : <>
            <span className="text-xl font-bold text-gray-900">
              Faça login em sua conta:
            </span>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-col items-center justify-start w-full gap-1">
                <label className="text-lg font-bold text-gray-900" htmlFor="email">Email</label>
                <input
                  onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })}
                  id="email"
                  type="text"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-1">
                <label className="text-lg font-bold text-gray-900" htmlFor="password">Senha</label>
                <input
                  onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}
                  id="password"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  type="password"
                  security="true"
                />
              </div>
            </div>
            <button
              onClick={() => setIsLogged(true)}
              className="w-full p-2 mt-4 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Entrar
            </button>
          </>
      }
    </div>
  );
}