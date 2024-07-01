import styles from './page.module.css'

import { getData } from '@/shared/config/server/getData'
import { GameField } from '@/features/GameField'

export default async function Home() {
    const { data } = await getData()
    return (
        <>
            <main className={styles.main}>
                <GameField groups={data} />
            </main>
        </>
    )
}
