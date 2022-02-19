import mongoose from 'mongoose';

export default async function connectToDb(){
    if(mongoose.connection.readyState >= 1) return;

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@realmcluster.bh8xv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
}