import mongoose from 'mongoose'

export default async function concectaNaDb(){
    mongoose.connect("mongodb+srv://Pedro:Pedro2007@cluster0.bzw2foh.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}