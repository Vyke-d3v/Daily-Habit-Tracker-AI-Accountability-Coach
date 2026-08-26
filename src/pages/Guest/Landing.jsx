import { Link } from "react-router-dom";
 const links
function Landing(){
    return(
        <div className="Landingcomponent">
            
            {/* <h1>Dashboard</h1> */}
            <p>Welcome to Daily Habit Tracker!
                A digital performance journal where users log daily habits and write a brief text
                entry checking in, receiving personalized coaching and habit analysis from an AI.
            </p>

            <div className="getStartedBUtton">
                {/* <a href="register">GET STARTED</a> */}
                <Link to="/register">GET STARTED</Link>
            </div>
        </div>
    )
}

export default Landing;