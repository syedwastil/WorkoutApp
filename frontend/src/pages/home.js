import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
//import components and hooks
import WorkoutDetails from "../components/WorkoutDetails";
import Workoutform from "../components/Workoutform";
import UseWorkoutContext from "../Hooks/UseWorkoutContext"

function Home() {
  const [workouts, setworkouts] = useState(null);
  //const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>async () => {
      const response = await axios.get('/api/workouts');
      //console.log(response.data)
        setworkouts(response.data);

  },[]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workouts) => <WorkoutDetails key={workouts._id} workout={workouts}/>)} 
      </div>
      <Workoutform/>
    </div>
  );
}

export default Home;
