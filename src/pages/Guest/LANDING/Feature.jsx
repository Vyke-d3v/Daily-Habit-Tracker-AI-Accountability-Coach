import { Typography } from "@heroui/react"
import Card_001 from "../Feature_Cards/Card_001"
import Card_002 from "../Feature_Cards/Card_002"
import Card_003 from "../Feature_Cards/Card_003"

// import 
export default function Feature(){
    return(
    <>
                    <span className="px-30"></span>
        <div className="flex items-center justify-center gap-50">
                <div>
                <h5 className="text-(--color-blaze-ember) text-sm px-5 ">DESIGNED FOR CONSISTENCY</h5>
                    <h3 className="text-(--color-blaze-text) text-4xl px-5">A calmer way to make <br />progress everyday</h3>
                </div>
                <div>
                    <Typography className="text-(--color-blaze-font) text-md py-5 flex items-center justify-items-center">Blaze gives you just enough structure to keep moving <br /> without turning self-improvement into full-time <br /> jobs.</Typography>
                </div>
        </div>
        
        <span className="px-30"> </span>
        <Card_001/>
        <div className="flex items-center justify-center">
            <Card_002/>
            <Card_003/>
        </div>
    
    </>
)
};