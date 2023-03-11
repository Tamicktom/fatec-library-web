//* Libraries imports
import { ReactNode } from 'react';

//* Components imports
import DashboardSidebar from '@/components/specific/DashboardSidebar/DashboardSidebar';

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  return (
    <div className='w-full h-screen bg-blue-300 flex flex-row'>
      <DashboardSidebar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        {
          children
        }
      </div>
    </div>
  )
}
