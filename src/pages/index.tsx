//* Libraries imports
import Head from "next/head";
import Link from "next/link";

//* Components imports
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import MainPage from "../components/common/MainPage/MainPage";

import { api } from "pnpm/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>fatec Library</title>
        <meta name="description" content="Fatec Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row items-start justify-start w-full h-full min-h-screen bg-gray-100 overflow-x-hidden'>
        <Sidebar />
        <div className='flex flex-col items-center justify-start w-full h-full'>
          <Navbar />
          <MainPage />
        </div>
      </div>
    </>
  );
};
