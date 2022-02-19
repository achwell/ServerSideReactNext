import mongoose from 'mongoose';

export default async function connectToDb(){
    if(mongoose.connection.readyState >= 1) return;

    const uri = `mongodb+srv://axelwulff:9IedCqR8tNbJdMFE@realmcluster.bh8xv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
}