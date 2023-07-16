const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();


const url = `mongodb+srv://jobanjatt113:${process.env.MONGO_PASS}@cluster0.tjr9apj.mongodb.net/`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))