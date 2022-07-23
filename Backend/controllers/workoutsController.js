const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')
//Get request for displaying all workouts
const getWorkouts=async (req,res)=>{
    const workouts=await Workout.find()//({}).sort({createdAt:-1} )
    res.status(200).json(workouts)
}

//Get request for displaying single workout
const getWorkout=async(req,res)=>{
    const {id}=req.params;
    //check for valid ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'ID is not VAlid'})
    }

    const workout=await Workout.findById(id);
    if(!workout){
        res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout);
}

//Get request for creating a workout
const createWorkout=async (req,res)=>{
    const{title,load,reps}=req.body;
    try{
        const workout=await Workout.create({title,load,reps});
        res.json(workout)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//Get request for deleting a workout
const deleteWorkout=async (req,res)=>{
    const {id}=req.params;
    //check for valid ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'ID is not Valid'})
    }
    const workout=await Workout.findByIdAndDelete(id);
    if(!workout){
        res.status(404).json({error:"No such Workout"})
    }
    res.status(200).json(workout)
}

//post request for updating workout
const updateWorkout=async (req,res)=>{
    const {id}=req.params;
    //check for valid ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'ID is not VAlid'})
    }
    const workout=await Workout.findByIdAndUpdate(id,{...req.body},{new:true})
    if(!workout){
        res.status(404).json({error:"No such Workout"})
    }
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
  }