import Link from 'next/link'

export default function Home() {
  return <div className='flex flex-col p-10 gap-5 items-start'>
    <h1 className='text-3xl font-bold p-10 w-full bg-gray-50 rounded-lg'>Home Page</h1>
    <Link href='login' className='underline text-blue-500'>Login</Link>
  </div>
}

