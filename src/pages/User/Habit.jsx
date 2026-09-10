import { useState } from "react";

function Habit (){

const [habit, setHabit] = useState([]);
const [newHabit, setNewHabit] = useState("");

function handleInputChange(event){
    setNewHabit(event.target.value);
}

function addHabit(){
    if (newHabit.trim() !==""){
        setHabit(habit =>[...habit, newHabit])
        setNewHabit("");
    }
}

function deleteHabit(index){
    const updatedHabit = habit.filter((_, i) => i !== index);
    setHabit(updatedHabit);
}

function moveHabitup(index){
    const updatedHabit = [...habit];
    if (index > 0) {
        const temp = updatedHabit[index - 1];
        updatedHabit[index - 1] = updatedHabit[index];
        updatedHabit[index] = temp;
        setHabit(updatedHabit);
    }
    
}

function moveHabitDown(index){
    const updatedHabit = [...habit];
    if (index < updatedHabit.length - 1) {
        const temp = updatedHabit[index + 1];
        updatedHabit[index + 1] = updatedHabit[index];
        updatedHabit[index] = temp;
        setHabit(updatedHabit);
    }

}

    return(
        <>
        <h2>Welcome to your habit Tracker.</h2>
        <description>Lets start by writting down the Habit you want to track.</description>
        <input 
            type="text" 
            placeholder="Enter your Habit here"
            value={newHabit}
            onChange={handleInputChange}/>
            <button 
                onClick={addHabit}>
                Add Habit
            </button>

            <ol>
                {habit.map((habitItem, index) =>
                <li key = {index}>
                    <span 
                        className="text">
                        {habitItem}
                    </span>
                    <button
                    onClick={()=> deleteHabit(index)}>
                        Delete
                    </button>

                    <button
                    onClick={()=> moveHabitup(index)}>
                        Move Habit Up
                    </button>

                    <button
                    onClick={()=> moveHabitDown(index)}>
                        Move Habit Down
                    </button>
                </li>
                )}
            </ol>
        </>
    );
}

export default Habit;