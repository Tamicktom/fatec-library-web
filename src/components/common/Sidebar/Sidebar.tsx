"use client";
//* Libraries imports

type Props = {

}

export default function Sidebar(props: Props) {
  return (
    <div className='flex flex-col items-center justify-start h-full bg-gray-200/50 w-96'>
      <div className="flex flex-col items-center justify-start gap-4 p-4">
        <span className="text-xl font-bold text-gray-900">
          Faça login em sua conta:
        </span>
        <div className="flex flex-col items-center justify-start gap-4">
          <div className="flex flex-col items-center justify-start gap-1">
            <label className="text-lg font-bold text-gray-900" htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col items-center justify-start gap-1">
            <label className="text-lg font-bold text-gray-900" htmlFor="password">Senha</label>
            <input
              id="password"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              type="password"
              security="true"
            />
          </div>
        </div>
        <button className="w-full p-2 mt-4 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Entrar
        </button>
      </div>
    </div>
  );
}