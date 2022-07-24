import React from 'react'

function WorkoutDetails({workout}) {
  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Weight (kg): </strong>{workout.load}</p>
        <p><strong>Reps (kg): </strong>{workout.reps}</p>
        <p>{workout.updatedAt}</p>
    </div>
  )
}

export default WorkoutDetails