import { useState, useEffect } from "react";

function useCheckinLabel() {
    const [label, setLabel] = useState (' ');

    useEffect (() => {
        const update = () =>{
                const now = new Date();
                const hour = now.getHours();
                const day = now.toLocaleDateString('en-GB', {weekday: 'short', day: 'numeric', month: 'short'});
                const hasCheckedIn = localStorage.getItem('checkin_'+ now.toDateString());
                
                if(hasCheckedIn) {
                    setLabel(`Checked in · ${day}`);
                }
                else if (hour < 23) {
                    const hoursLeft=23-hour;
                    setLabel(`${day} . ${hoursLeft}h to check in`);
                }
            else{
                setLabel(`Last chance to check in today! ${day}`);
            }
        };
        update();
        const interval = setInterval(update, 60000);
        return() => clearInterval(interval);
    }, []);

    return label;
}


export default useCheckinLabel;