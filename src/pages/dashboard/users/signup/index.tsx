
//* Component imports
import Head from "next/head";
import DashboardSidebar from "pnpm/components/specific/DashboardSidebar/DashboardSidebar";
import NewUserForm from "pnpm/components/specific/NewUserForm/NewUserForm";

/**
 * Screen to add users to the library
 */

export default function Signup() {

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
          <NewUserForm />
        </div>
      </div>
    </>
  );
}