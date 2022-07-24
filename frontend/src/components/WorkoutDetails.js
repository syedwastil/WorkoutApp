import React from 'react'
import axios from 'axios'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({workout}) {
  const handleClick=async (e)=>{
    await axios.delete('/api/workouts/'+workout._id)
    .then(()=>{
      window.location.reload();
    })
    .catch((err)=>console.log(err))
}
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Weight (kg): </strong>{workout.load}</p>
        <p><strong>Reps (kg): </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <p>{workout.updatedAt}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails