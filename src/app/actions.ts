'use server'

import { BASE_URL } from '@/shared/config/constants/index'
import { PlayerType } from '@/shared/config/structure/type'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const sendData = async (data: PlayerType[]) => {
    await fetch(BASE_URL + '/api/data/update', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    revalidatePath('/')
    redirect('/')
}
