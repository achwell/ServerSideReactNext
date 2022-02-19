import mongoose from 'mongoose'

export async function connectToDB() {
    if(mongoose.connection.readyState >= 1) return;
    return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@realmcluster.bh8xv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
}
