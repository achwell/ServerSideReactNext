import fs from 'fs/promises'
import path from 'path'
import Db from "../types/db.type"


export const getJsonData = async (): Promise<Db> => {
    const filePath = path.join(process.cwd(), 'utils', 'db.json')
    const db = await fs.readFile(filePath)
    const buffer = new Buffer(db).toString()
    return JSON.parse(buffer)
}