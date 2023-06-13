require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = 'mongodb+srv://Addis:XxQJdpTa9VGPx0YL@cluster0.a5k5xmq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(()=> console.log('connected to mongodb'))
.catch(err => console.log(err));

mongoose.connection.on('error', err => {
    console.log(err);
})