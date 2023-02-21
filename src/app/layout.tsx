//* Libraries imports
import { ReactNode } from 'react';

//* Components imports
import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';

import './globals.css';

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='w-screen min-h-screen overflow-x-hidden flex flex-col justify-start items-center'>
        <div className='w-full max-w-5xl sticky mt-4'>
          <Navbar />
        </div>
        <div className='w-full max-w-7xl p-4 bg-white flex justify-start items-center flex-col'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
