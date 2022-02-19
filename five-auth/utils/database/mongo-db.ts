import { MongoClient } from 'mongodb'

export async function connectToDb(){
    const dbClient = await MongoClient.connect(`mongodb+srv://axelwulff:tMeO1ePoWptrlxrb@realmcluster.bh8xv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useUnifiedTopology: true});
    return dbClient;
}