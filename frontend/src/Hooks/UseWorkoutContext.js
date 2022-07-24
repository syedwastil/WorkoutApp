import { WorkoutContext } from "../context/workoutContext";
import { useContext } from "react";

function UseWorkoutContext(){
    const context=useContext(WorkoutContext);
    console.log(context)
    // if(!context){
    //     throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider');
    // }
    
    return context;
}
export default UseWorkoutContext