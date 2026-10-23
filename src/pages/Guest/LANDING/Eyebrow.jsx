import { Typography } from "@heroui/react"
import StatusDot from "../../../components/StatusDot"

export default function Eyebrow(){
    return(
        <>
            <div className="flex items-center justify-center px-5 py-3 gap-4">
                <div className='*:flex items-center justify-center gap-2 border rounded-2xl shadow-sm px-3 py-2 bg-(--color-blaze-white) border-(--color-blaze-amber)'>
                <Typography> <StatusDot/>Build your with Intentions</Typography>
                </div>
            </div>
        </>
    )
};