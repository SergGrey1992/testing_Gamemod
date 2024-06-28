import { GroupsForTeams } from '@/shared/config/server/groupForTeams'
import { getRandomInt } from '@/shared/lib/getRandomInt'

export const generateRandomEndGame = (
    group: GroupsForTeams
): GroupsForTeams => {
    const randomTeamIndex = Math.random() < 0.5 ? 0 : 1
    const losersTeam = randomTeamIndex === 0 ? 'red' : 'blue'

    const pointsToDistribute = 50
    const numberOfSurvivors = getRandomInt(1, 15)
    const deadOnWinners = pointsToDistribute - numberOfSurvivors
    const teamToZeroHP = group[losersTeam]
    const teamToKeepHP = group[losersTeam === 'red' ? 'blue' : 'red']

    let remainingPoints: number
    for (const index in teamToZeroHP) {
        teamToZeroHP[index].hp = 0
        teamToZeroHP[index].counts.deaths += 1
    }

    const survivors = teamToKeepHP.slice(0, numberOfSurvivors)

    remainingPoints = pointsToDistribute
    survivors.forEach((player, index) => {
        const points = Math.floor(remainingPoints / (survivors.length - index))
        player.counts.kills += points
        remainingPoints -= points
    })

    remainingPoints = deadOnWinners
    teamToZeroHP.forEach((player, index) => {
        const points = Math.floor(
            remainingPoints / (teamToZeroHP.length - index)
        )
        player.counts.kills += points
        remainingPoints -= points
    })

    return {
        ...group,
        [losersTeam]: teamToZeroHP,
        [losersTeam === 'red' ? 'blue' : 'red']: teamToKeepHP.map((pl) => {
            const savePl = survivors.find((sPl) => pl.id === sPl.id)
            if (savePl) {
                return savePl
            } else {
                return {
                    ...pl,
                    hp: 0,
                    counts: { ...pl.counts, deaths: (pl.counts.deaths += 1) },
                }
            }
        }),
    }
}
