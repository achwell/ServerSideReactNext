import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDb} from "../../utils/database/mongo-db"
import { passwordHash } from '../../utils/tools'
import { authSchema }  from '../../utils/validations'

type Data = {message: string, error?: any}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {email, password} = req.body

  try{
    await authSchema.validate({email, password},{ abortEarly: false})
  } catch(error){
    res.status(500).json({message:'something wrong', error})
    return
  }

  const mongoClient = await connectToDb()
  try {
    const db = mongoClient.db()

    const checkUser = await db.collection("users").findOne({email})
    if(checkUser) {
      res.status(400).json({message:'Username exist'})
      return
    }

    const hashedPass = await passwordHash(password)
    await db.collection("users").insertOne({email, password: hashedPass})
    res.status(200).json({message: "Registered successfully"})
  } catch (error) {
    res.status(500).json({message: "Error", error})
  }
  mongoClient.close()
}
export default handler