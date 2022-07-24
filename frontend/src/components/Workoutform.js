import axios from 'axios';
import React from 'react';
import {useState} from 'react'

function Workoutform() {
    const [title, settitle] = useState('');
    const [load, setload] = useState('');
    const [reps, setreps] = useState('');
    const [error, seterror] = useState('');

    const handleSubmit=async (e)=>{
        //e.preventDefault();
        const workout = {title, load, reps}
        console.log(workout)
        await axios.post('/api/workouts/',workout)
            .then((response)=>{
                console.log(response)
                //setEmptyFields([])
                seterror(null)
                settitle('')
                setload('')
                setreps('')
            })
            .catch((err)=>{seterror(err.response.data.error)})

}
  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Create new Workout</h3>
        <label>Exercise title: </label>
        <input 
        type="text"
        value={title}
        onChange={(e)=>settitle(e.target.value)} />

        <label>load (kg): </label>
        <input 
        type="number"
        value={load}
        onChange={(e)=>setload(e.target.value)} />

        <label>reps: </label>
        <input 
        type="number"
        value={reps}
        onChange={(e)=>setreps(e.target.value)} />    
        <button>Add Workout</button>    
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Workoutform;