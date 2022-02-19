import {connectToDB} from './mongo-db'
import {InferIdType} from "mongodb";

export async function getAll<Type>(collection: string): Promise<{message?: string, data?: Type[]}> {
    let mongoClient

    try {
        mongoClient = await connectToDB()
    } catch (error) {
        return {message: 'Sorry try again later'}
    }

    const db = mongoClient.db()
    const documents = await db.collection(collection).find().toArray()
    return {data: documents as unknown as Type[]}
}
export async function addItem<Type>(collection: string, item: Type): Promise<{message?: string, id?: InferIdType<Type>}> {
    let mongoClient

    try {
        mongoClient = await connectToDB()
    } catch (error) {
        return {message: 'Sorry try again later'}
    }

    const db = mongoClient.db()
    const documents = await db.collection(collection).insertOne(item)
    return {id: documents.insertedId as InferIdType<Type>}
}