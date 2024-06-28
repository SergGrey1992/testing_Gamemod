import { PlayerType } from '@/shared/config/structure/type'

function groupBy(
    iterable: WithId[],
    callback: (item: WithId) => string
): GroupsForTeams {
    const groups: GroupsForTeams = {} as GroupsForTeams
    for (let item of iterable) {
        const result = callback(item)
        //@ts-ignore
        if (!groups[result]) {
            //@ts-ignore
            groups[result] = [item]
        } else {
            //@ts-ignore
            groups[result].push(item)
        }
    }
    return groups
}

export type WithId = { id: string } & PlayerType

export type GroupsForTeams = {
    red: WithId[]
    blue: WithId[]
}

export const groupForTeams = (allPlayers: {
    [key: string]: PlayerType
}): GroupsForTeams => {
    return groupBy(
        Object.entries(allPlayers).map(([id, pl]) => ({ id, ...pl })),
        ({ team }) => {
            return team
        }
    )
}
