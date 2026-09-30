import { Link } from "react-router-dom";
import { Button, } from "@heroui/react";
import { Typography } from "@heroui/react";
// import {Eyebrow} from "@heroui/react"
function Landing(){
    return(
        <div className="Landingcomponent">
            {/* <Eyebrow> */}
                <p className="border">Daily Habit Tracker</p>
            {/* </Eyebrow> */}
            {/* <h1>Dashboard</h1> */}
            <Typography type='h2' className="landingHeader align-center">
            <span className="eyebrow">BUILD BETTER HABITS</span>
                Build better habits with a digital performance journal and AI coaching.
            </Typography>
            <Typography type='p' className="border-l-background-inverse, ">
                A digital performance journal where users log daily habits and write a brief text
                entry checking in, receiving personalized coaching and habit analysis from an AI.
            </Typography>

            <div className="getStartedBUtton">
                <Button
                
                fullwidth variant="solid" className="bg-orange-400 hover:bg-orange-500" textColor='white'
                >
                    <Link to="/register">Start Tracking</Link>
                </Button>
                <Button fullwidth variant="solid" className="bg-orange-400 hover:bg-orange-500">
                    <Link to="/home">Get a Free Demo</Link>
                </Button>
            </div>
        </div>
    )
}

export default Landing;