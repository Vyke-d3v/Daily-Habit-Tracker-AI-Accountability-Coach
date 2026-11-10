import { Typography } from "@heroui/react"
import { CardTitle } from "@heroui/react"
import { Card } from "@heroui/react"
import { Description } from "@heroui/react"
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
    <div className="py-7  flex items-center justify-center px-25">
        <Card className="flex items-center justify-center gap-5 border py-30 px-5 border-(--color-blaze-stone) bg-(--color-blaze-bg)">
        <div className="flex items-center justify-center">
            <div className="px-10">
            
                <CardTitle className="text-lg py-4 text-(--color-blaze-ink) font-stretch-500% font-bold">
                    Easy Daily, Minus the Friction.
                </CardTitle>
                <Typography className="text-(--color-blaze-text)">See what matters today and Check it off with just One Tap. Simple <br /> enough to use in one tap.</Typography>
            </div>
            <Card className=" flex items-start justify-between px-30 border bg-(--color-blaze-white) ">
                <div className="flex items-center justify-between shadow-sm">
                    <input type="checkbox" name="" id="" /> 
                    <label htmlFor="">Code for 60 Minutes</label>
                    <Description>8:00 AM</Description>
                </div>
                <div className="flex items-center justify-between shadow-sm">
                    <input type="checkbox" name="" id="" className="bg-(--color-blaze-ember)"/>
                    <label htmlFor="read20pages">Read 20 Pages</label>
                    <Description>12:30 PM</Description>
                </div>
                <div className="flex items-center justify-between">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="exercise">Exercise</label>
                    <Description>5:30 PM</Description>
                </div>
            </Card>
        </div>
        </Card>
    </div>
    
    </>
)
};