import { useState } from "react";

const [habit, setHabit] = useState([]);
const [newHabit, setNewHabit] = useState("");

function handleInputChange(event){

}

function addHabit(){

}

function deleteHabit(index){

}

function moveHabitup(index){
    
}

function moveHabitDown(index){

}

function Habits (){
    return(
        <>
        <h2>Welcome to your habit Tracker.</h2>
        <description>Enter your daily habits here.</description>
        <input type="button" value="add-habit"></input></>
    );
}

export default Habits;