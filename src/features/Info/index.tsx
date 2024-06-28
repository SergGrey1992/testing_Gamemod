'use client'

import React from 'react'
import { useStore } from '@/shared/ui/Modal/lib/state'
import { Modal } from '@/shared/ui/Modal'
import { GroupsForTeams } from '@/shared/config/server/groupForTeams'
import { ifError } from 'node:assert'
import { Body } from '@/features/Info/ui/Body/index'

type Props = {
    groups: GroupsForTeams
}

export const Info = ({ groups }: Props) => {
    const id = useStore((state) => state.id)

    if (id === undefined) {
        return null
    }

    const current = Object.values(groups)
        .flatMap((i) => i)
        .find((pl) => pl.id === id)

    if (!current) return null
    return (
        <Modal portalId={'modal'}>
            <Body current={current} />
        </Modal>
    )
}
