const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://MernChatApp:${process.env.DB_PW}@cluster0.ehrskgi.mongodb.net/chatApp?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
