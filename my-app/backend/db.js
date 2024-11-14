const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://anandpratapsingh04:food_alix001@cluster0.n3s1e0j.mongodb.net/FoodDeliveryApp(MERN)?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Fetch food items and food categories
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCollection = await mongoose.connection.db.collection("food_category").find({}).toArray();

    // Store data globally
    global.food_items = fetched_data;
    global.food_category = foodCollection;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
