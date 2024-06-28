import { BASE_URL } from '@/shared/config/constants'

export const getData = async () => {
    const res = await fetch(BASE_URL + '/api/data')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}
