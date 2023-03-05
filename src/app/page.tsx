import MainPage from '@/components/common/MainPage/MainPage'
import Navbar from '@/components/common/Navbar/Navbar'
import Sidebar from '@/components/common/Sidebar/Sidebar'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <>
      <div className='flex flex-row items-start justify-start w-full h-full min-h-screen bg-gray-100'>
        <Sidebar />
        <div className='flex flex-col items-center justify-start w-full h-full'>
          <Navbar />
          <MainPage />
        </div>
      </div>
    </>
  )
}
