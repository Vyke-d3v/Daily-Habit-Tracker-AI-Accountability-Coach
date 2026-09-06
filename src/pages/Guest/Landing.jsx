import { Link } from "react-router-dom";
import { Button, } from "@heroui/react";
import { Typography } from "@heroui/react";
function Landing(){
    return(
        <div className="Landingcomponent">
            
            {/* <h1>Dashboard</h1> */}
            <Typography type='h2' className="landingHeader align-center">
                Build better habits with a digital performance journal and AI coaching.
            </Typography>
            <Typography type='p' className="border-l-background-inverse, ">
                A digital performance journal where users log daily habits and write a brief tex
                entry checking in, receiving personalized coaching and habit analysis from an AI.
            </Typography>

            <div className="getStartedBUtton">
                <Button fullwidth variant="solid" color="bg-green-500">
                    <Link to="/register">GET STARTED</Link>
                </Button>
            </div>
        </div>
    )
}

export default Landing;