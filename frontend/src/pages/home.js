import React from "react";
import { useEffect } from "react";
import axios from 'axios'
//import components and hooks
import WorkoutDetails from "../components/WorkoutDetails";
import Workoutform from "../components/Workoutform";
import UseWorkoutContext from "../Hooks/UseWorkoutContext"

function Home() {

  //const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>async () => {
    const {workouts,dispatch}=UseWorkoutContext();
      const response = await axios.get('/api/workouts')
        .then(()=>{
            dispatch({type:'SET_WORKOUTS',payload:response.data})
        })
      

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
