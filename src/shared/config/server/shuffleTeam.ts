import { PlayerType } from '@/shared/config/structure/type'

function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export const shuffleTeam = (allPlayers: { [key: string]: PlayerType }) => {
    const playerIds = Object.keys(allPlayers)
    const ids = shuffle(playerIds)

    const redTeam = ids.slice(0, 50)
    const blueTeam = ids.slice(50, 100)

    redTeam.forEach((id) => (allPlayers[id].team = 'red'))
    blueTeam.forEach((id) => (allPlayers[id].team = 'blue'))

    return allPlayers
}
