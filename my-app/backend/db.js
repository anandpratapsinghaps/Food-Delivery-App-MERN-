const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://anandpratapsingh04:food_alix001@cluster0.n3s1e0j.mongodb.net/FoodDeliveryApp(MERN)?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB =async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async (err,result)=>{
        if(err) console.log("Error",err)
        else{
            console.log('connected');
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err,data){
                if(err) console.log(err);
                else console.log();
            })
    }
    });
}

module.exports=mongoDB;


