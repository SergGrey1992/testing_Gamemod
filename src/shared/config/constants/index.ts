import path from 'path'

export const filePath = path.join(
    process.cwd(),
    './src/shared/config/structure/players.json'
)

export const BASE_URL = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'
