const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'appli-boucher',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to appli-boucher database'));

const url='mongodb+srv://binokev:admin@cluster0.hnc02ku.mongodb.net/test'

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