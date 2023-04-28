const mongoose = require('mongoose');
const mongoClient = require('mongodb').mongoClient;

mongoose.connect('mongodb://localhost:3000', {
    dbName: 'appli-boucher',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to appli-boucher database'));


const uri = 'mongodb+srv://binokev:admin@cluster0.hnc02ku.mongodb.net/test';
mongoClient.connect(uri,function(err,client) {
    const collection = client.db("test").collection("devices");
     // perform actions on the collection object
   client.close();
});

const url='mongodb://localhost:3000';

mongoose.connect(url,{}).then(()=>{
    
    console.log('logged in database')
})
.catch((err)=>{
    console.log(err)
})
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 3000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:3000
     
    // If you see App is working means
    // backend working properly
});
 
app.post("/connection", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(3000);