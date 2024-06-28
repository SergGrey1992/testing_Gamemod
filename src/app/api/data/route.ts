import { NextResponse } from 'next/server'
import fs from 'fs'
import { PlayerType } from '@/shared/config/structure/type'
import { shuffleTeam } from '@/shared/config/server/shuffleTeam'
import { groupForTeams } from '@/shared/config/server/groupForTeams'
import { filePath } from '@/shared/config/constants'

export async function GET() {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf8')

        const data = JSON.parse(jsonData) as { [key: string]: PlayerType }

        // const isGameProgress = Object.values(data).some((pl) => pl.hp === 0)
        //
        // if (!isGameProgress) {
        //     const groups = groupForTeams(data)
        //
        //     return NextResponse.json({ status: 200, data: groups })
        // }

        const shuffleTeamData = shuffleTeam(data)

        const groups = groupForTeams(shuffleTeamData)

        return NextResponse.json({ status: 200, data: groups })
    } catch (err) {
        return NextResponse.json({ message: 'Error reading JSON file' })
    }
}
