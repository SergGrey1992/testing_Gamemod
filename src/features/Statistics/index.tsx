import React from 'react'
import { useHeader } from '@/widget/ui/Header/lib/state'

import styles from './styles.module.css'
import { GroupsForTeams } from '@/shared/config/server/groupForTeams'

interface Props {
    groups: GroupsForTeams
}

export const Statistics = ({ groups }: Props) => {
    const isOpen = useHeader((state) => state.isOpen)
    const toggleOpen = useHeader((state) => state.toggleOpen)

    if (!isOpen) return null

    return (
        <div className={styles.content}>
            <button onClick={toggleOpen}>closed</button>
            <h3>Список участников</h3>
            <ul className={styles.inner}>
                {Object.values(groups)
                    .flatMap((i) => i)
                    .map((pl, index) => {
                        return (
                            <li key={`${pl.name}.${index}`}>
                                <div>
                                    <span>{pl.name}</span>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
