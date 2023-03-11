//* Libraries imports
import { ReactNode } from 'react';

//* Components imports
import DashboardSidebar from '@/components/specific/DashboardSidebar/DashboardSidebar';

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <div className='flex flex-row w-full h-screen'>
      <DashboardSidebar />
      <div className="flex flex-col items-center justify-center w-full h-full">
        {
          children
        }
      </div>
    </div>
  )
}
