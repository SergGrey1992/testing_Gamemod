import { BASE_URL } from '@/shared/config/constants'

export const getData = async () => {
    const res = await fetch('https://testing-gamemod.vercel.app' + '/api/data')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}
