export type PlayerType = {
    name: string
    hp: number
    counts: {
        kills: number
        deaths: number
    }
    sex: string
    description: string
    friendIds: string[]
    team: 'red' | 'blue'
    skin?: 'robbert' | 'stream' | 'wooder'
    status?: 'idle' | 'hurt' | 'death'
    points: number
}
