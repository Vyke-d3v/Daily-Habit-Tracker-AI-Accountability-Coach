import { Typography } from "@heroui/react"
import StatusDot from "../../../components/StatusDot"

export default function Eyebrow(){
    return(
        <>
            <div className="flex items-center justify-center px-5 py-3">
                <div className='*:flex items-center justify-center gap-2 border rounded-2xl shadow-sm px-3 py-0.1'>
                <Typography> <StatusDot/>Build your with Intentions</Typography>
                </div>
            </div>
        </>
    )
};