import { useState } from "react";

const [habit, setHabit] = useState([]);
const [newHabit, setNewHabit] = useState("");

function handleInputChange(event){
    setNewHabit(event.target.value);
}

function addHabit(){

}

function deleteHabit(index){

}

function moveHabitup(index){
    
}

function moveHabitDown(index){

}

function Habit (){
    return(
        <>
        <h2>Welcome to your habit Tracker.</h2>
        <description>Lets start by writting down the Habit you want to track.</description>
        <input 
            type="button" 
            placeholder="Enter your Habit here"
            value={newHabit}
            onChange={handleInputChange}>
        </input></>
    );
}

export default Habit;