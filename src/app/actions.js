'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'

export const setCookie = async () => {
    cookies().set('login', Date.now())
}

export const revalidate = async () => {
    revalidateTag('any')
}