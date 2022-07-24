import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

export const UseWorkoutContext=()=>{
    const context=useContext(WorkoutContext);
    if(!context){
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider');
    }
    return context;
}