require('dotenv').config() 
const express=require('express');
const morgan = require('morgan');
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/Workouts')
//express app
const app=express(); 
app.use(morgan('dev'))
//middleware
app.use(express.json())

//routes     
app.use('/api/workouts',workoutRoutes) 

app.get('/favicon.ico',(req,res)=>{
    console.log("bas karo")
})

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen to port
        app.listen(process.env.PORT,()  => console.log("listening to port: ",process.env.PORT));
    })
    .catch((err)=>{console.log(err)})

