import { dummy, revalidate, setCookie } from '../actions'

export const LoginForm = () => {
    return <form className='flex flex-col items-start gap-3'>
        <button className='hover:underline' formAction={dummy}>Log in (dummy)</button>
        <button className='hover:underline' formAction={setCookie}>Log in (set cookie)</button>
        <button className='hover:underline' formAction={revalidate}>Log in (revalidate tag)</button>
    </form>
}