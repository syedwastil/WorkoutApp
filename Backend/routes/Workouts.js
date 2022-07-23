const express= require("express");
const{
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
  } =require('../controllers/workoutsController');
const router=express.Router();

router.get('/',getWorkouts);//get all workouts
router.post('/',createWorkout);//post a new work out
router.get('/:id',getWorkout);//Get asingle workout
router.delete('/:id',deleteWorkout)//delete a workout
//router.get('/create',createWorkout)
router.patch('/:id',updateWorkout)//update a workout


module.exports=router;

