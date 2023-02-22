//* Libraries imports
import { ReactNode } from 'react';

//* Components imports
import Sidebar from '@/components/common/Sidebar/Sidebar';
import Navbar from '@/components/common/Navbar/Navbar';

import './globals.css';

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <head />
      <body className='flex flex-col items-center justify-start overflow-x-hidden bg-green-900'>
        <div className='flex flex-row items-start justify-start w-full h-full min-h-screen bg-gray-100'>
          <Sidebar />
          <div className='flex flex-col items-center justify-start w-full h-full'>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
