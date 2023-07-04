const express = require('express');
const serverConfig = require('./configs/server.config');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model');
const bcrypt  = require('bcrypt');


const app = express();

// Logic to connect to mongodb and create admin user
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;

  

db.on("error", ()=>{
  console.log("error while connecting to DB");
})

db.once("open", ()=>{
  console.log("DB is connected");
  init ();
})

async function init () {

   let admin = await userModel.findOne({
    userId : 'admin'
  })
  if(admin){
    console.log("Admin user already present");
    return;
}
 admin =  await userModel.create ({
       name: 'Ambrish Kumar',
       userId : 'admin' ,
       password : bcrypt.hashSync('ambrish23',8),
       email : 'ambrish19.52112gmail.com',
       userType : "ADMIN"
 
     })

     console.log(admin);
     
 };





app.listen(serverConfig.PORT , ()=>{
  console.log("server started");
})
