//* Libraries imports
import { ReactNode } from 'react';

//* Components imports
import DashboardNavbar from '@/components/specific/DashboardNavbar/DashboardNavbar';
import '../globals.css';

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <head />
      <body className='flex flex-col items-center justify-start overflow-x-hidden'>
        <DashboardNavbar />
        <div className='flex flex-row items-center justify-center w-full h-full'>
          {children}
        </div>
      </body>
    </html>
  )
}