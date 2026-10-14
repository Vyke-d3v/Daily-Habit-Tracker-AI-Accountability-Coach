import { Typography } from "@heroui/react"
import StatusDot from "../../../components/StatusDot"

export default function Eyebrow(){
    return(
        <>
            <div className="flex items-center justify-center px-5 py-3">
                <Typography className="italic border rounded-2xl text-xs shadow-sm gap-2 flex items-center px-3 py-1"> <StatusDot/>Build your with Intentions</Typography>
            </div>
        </>
    )
};