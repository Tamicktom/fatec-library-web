//* Libraries imports
import { ReactNode } from 'react';

//* Components imports

import '../globals.css';

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <head />
      <body className='flex flex-col items-center justify-start overflow-x-hidden'>
      <h1 className='hidden'>Login</h1>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
