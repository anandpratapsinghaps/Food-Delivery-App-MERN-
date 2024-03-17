const mongoose = require('mongoose');
const mongoURI = 'mongodb://anandpratapsingh04:food_alix001@ac-49lysvw-shard-00-00.n3s1e0j.mongodb.net:27017,ac-49lysvw-shard-00-01.n3s1e0j.mongodb.net:27017,ac-49lysvw-shard-00-02.n3s1e0j.mongodb.net:27017/?ssl=true&replicaSet=atlas-fd4zaw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB =async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
        if(err) console.log("Error",err)
        else{
            console.log('connected');
    }
    });
}

module.exports=mongoDB;


