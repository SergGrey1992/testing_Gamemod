'use client'

import React, { useEffect, useState } from 'react'

import { classNames } from '@/shared/lib/classNames'
import { useStore } from '@/shared/ui/Modal/lib/state'
import { GroupsForTeams } from '@/shared/config/server/groupForTeams'
import { generateRandomEndGame } from '@/shared/config/server/generateRandomEndGame'
import { Info } from '@/features/Info'
import { Statistics } from '@/features/Statistics'
import { Header } from '@/widget/ui/Header'

import styles from '@/app/page.module.css'

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
                <Header
                    runGame={runGame}
                    isProgressGame={Object.values(state)
                        .map(([_, pl]) => pl.hp)
                        .flatMap((i) => i)
                        .some((h) => h === 0)}
                />
            </header>
            <Statistics groups={state} />
            <div className={classNames(styles.inner)}>
                {Object.entries(state).map(([team, pl], indexGroup) => {
                    const isVictoryTeam =
                        pl.some((p) => p.hp > 0) && pl.some((p) => p.hp === 0)
                    return (
                        <section key={indexGroup} className={styles.section}>
                            <div
                                className={classNames(styles.victory, {
                                    [styles.activeVictory]: isVictoryTeam,
                                })}
                            >
                                <span>
                                    TEAM {pl[0].team?.toUpperCase()} VICTORY
                                </span>
                            </div>
                            <h2 className={styles.teamName}>{team}</h2>
                            <div className={styles.teamBox}>
                                {pl.map((p, index) => {
                                    return (
                                        <div
                                            key={`Team.${team}.name.${p.name}.${index}`}
                                            className={styles.content}
                                            onClick={() => {
                                                setId(p.id)
                                            }}
                                        >
                                            <span className={styles.playerName}>
                                                {p.name}
                                            </span>
                                            <div />
                                            <div className={styles.player}>
                                                <div
                                                    className={classNames(
                                                        styles.full,
                                                        {
                                                            [styles[
                                                                `${p.skin}_death`
                                                            ]]: p.hp === 0,
                                                            [styles.wrap]:
                                                                indexGroup ===
                                                                1,
                                                        },
                                                        [
                                                            styles[
                                                                `${p.skin}_${p.status}`
                                                            ],
                                                        ]
                                                    )}
                                                />
                                            </div>
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
