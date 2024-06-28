'use client'

import React, { useEffect, useState } from 'react'
import { GroupsForTeams } from '@/shared/config/server/groupForTeams'
import styles from '@/app/page.module.css'
import { classNames } from '@/shared/lib/classNames'
import { Header } from '@/widget/ui/Header/index'
import { generateRandomEndGame } from '@/shared/config/server/generateRandomEndGame'
import { useStore } from '@/shared/ui/Modal/lib/state'
import { Info } from '@/features/Info/index'
import { Statistics } from '@/features/Statistics/index'

interface Props {
    groups: GroupsForTeams
}

export const GameField = ({ groups }: Props) => {
    const setId = useStore((state) => state.setId)

    const [state, setState] = useState(groups)

    useEffect(() => {
        setState(groups)
    }, [groups])

    const runGame = () => {
        setState(generateRandomEndGame(groups))
    }

    return (
        <div className={classNames(styles.container)}>
            <header>
                <Header runGame={runGame} />
            </header>
            <Statistics groups={state} />
            <div className={classNames(styles.inner)}>
                {Object.entries(state).map(([team, pl], indexGroup) => {
                    return (
                        <section key={indexGroup} className={styles.section}>
                            <h2 className={styles.teamName}>{team}</h2>
                            <div className={styles.teamBox}>
                                {pl.map((p, index) => {
                                    return (
                                        <div
                                            key={`Team.${team}.name.${p.name}.${index}`}
                                            className={styles.player}
                                        >
                                            {p.name}
                                            <div
                                                className={classNames(
                                                    styles.full,
                                                    {
                                                        [styles[
                                                            `${p.skin}_death`
                                                        ]]: p.hp === 0,
                                                        [styles.wrap]:
                                                            indexGroup === 1,
                                                    },
                                                    [
                                                        styles[
                                                            `${p.skin}_${p.status}`
                                                        ],
                                                    ]
                                                )}
                                            />
                                            <button
                                                onClick={() => {
                                                    setId(p.id)
                                                }}
                                            >
                                                info
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </div>
            <Info groups={state} />
        </div>
    )
}
