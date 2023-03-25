//* Libraries imports
import { ReactNode } from 'react';
import Head from 'next/head';

//* Components imports
import DashboardSidebar from 'pnpm/components/specific/DashboardSidebar/DashboardSidebar';
import BooksSelled from 'pnpm/components/specific/charts/BooksSelled';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row w-full h-screen'>
        <DashboardSidebar />
        <div className="flex flex-col items-center justify-center w-full h-full">

          <div className="flex flex-row items-start justify-start w-full min-h-screen">
            <div className="flex flex-col items-start justify-start w-full h-full min-h-screen bg-gray-50">
              <div className="flex flex-row items-start justify-start w-full bg-gray-100 rounded-lg">
                <BooksSelled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
