import { Link } from "react-router-dom";
function Landing(){
    return(
        <div>
            {/* <h1>Dashboard</h1> */}
            <p>Welcome to Daily Habit Tracker!</p>
            <p> A digital performance journal where users log daily habits and write a brief text
                entry checking in, receiving personalized coaching and habit analysis from an AI.</p>

            <div>
                {/* <a href="register">GET STARTED</a> */}
                <Link to="/register">GET STARTED</Link>
            </div>
        </div>
    )
}

export default Landing;