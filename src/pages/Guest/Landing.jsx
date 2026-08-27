import { Link } from "react-router-dom";
import { Typography } from "@heroui/react";
function Landing(){
    return(
        <div className="Landingcomponent">
            
            {/* <h1>Dashboard</h1> */}
            <Typography type='h2' className="landingHeader">
                Build better habits with a digital performance journal and AI coaching.
            </Typography>
            <Typography type='p' className="border-l-background-inverse, ">
                A digital performance journal where users log daily habits and write a brief text
                entry checking in, receiving personalized coaching and habit analysis from an AI.
            </Typography>

            <div className="getStartedBUtton">
                {/* <a href="register">GET STARTED</a> */}
                <Link to="/register">GET STARTED</Link>
            </div>
        </div>
    )
}

export default Landing;