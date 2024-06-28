'use client'

import React from 'react'
import styles from './styles.module.css'
import { useHeader } from '@/widget/ui/Header/lib/state'

interface Props {
    runGame: () => void
}

export const Header = ({ runGame }: Props) => {
    const toggleOpen = useHeader((state) => state.toggleOpen)
    return (
        <div className={styles.content}>
            <button className={styles.action} onClick={runGame}>
                play
            </button>
            <button className={styles.action} onClick={toggleOpen}>
                statistic
            </button>
            <button
                className={styles.action}
                onClick={() => {
                    window.location.reload()
                }}
            >
                reload
            </button>
        </div>
    )
}
