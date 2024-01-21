import { LoginForm } from './form'

export default function LoginPage() {
    return <div className='flex flex-col p-10 gap-5 items-start'>
        <h1 className='text-3xl font-bold p-10 w-full bg-gray-50 rounded-lg'>Login Page</h1>
        <LoginForm />
    </div>
}