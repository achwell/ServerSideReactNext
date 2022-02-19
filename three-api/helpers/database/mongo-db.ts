import { MongoClient} from "mongodb"

export async function connectToDB() {
    const dbClient = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@realmcluster.bh8xv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    return dbClient
}
