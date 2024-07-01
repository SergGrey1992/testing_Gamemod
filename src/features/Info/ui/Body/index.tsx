import React from 'react'

import styles from './styles.module.css'
import { WithId } from '@/shared/config/server/groupForTeams'
import { classNames } from '@/shared/lib/classNames'

interface Props {
    current: WithId
}

export const Body = ({ current }: Props) => {
    return (
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.innerBox}>
                <div
                    className={classNames(styles.full, {}, [
                        styles[`${current.skin}_idle`],
                    ])}
                />
            </div>
            <div>
                <span className={styles.subInfo}>Name: </span>
                <span className={styles.sub}> {current.name}</span>
            </div>
            <div>
                <span className={styles.subInfo}>Info: </span>
                <span className={styles.sub}> {current.description}</span>
            </div>
            <div>
                <span className={styles.subInfo}>Skin: </span>
                <span className={styles.sub}>{current.skin}</span>
            </div>
            <div>
                <span className={styles.subInfo}>Team: </span>
                <span className={styles.sub}>{current.team}</span>
            </div>
            <div>
                <span className={styles.subInfo}>Points: </span>
                <span className={styles.sub}>{current.points}</span>
            </div>
            <div>
                <div>
                    <span className={styles.subInfo}>Kills: </span>
                    <span className={styles.sub}>{current.counts.kills}</span>
                </div>
                <div>
                    <span className={styles.subInfo}>Death: </span>
                    <span className={styles.sub}>{current.counts.deaths}</span>
                </div>
                <button>follow</button>
            </div>
        </div>
    )
}
