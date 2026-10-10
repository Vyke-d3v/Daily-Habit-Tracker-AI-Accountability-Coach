// import { Typography } from "@heroui/react"

export default function SocialProof(){
    return(
        <>
        <div className="flex items-center justify-center gap-1 mb-10 texts-xs text gray-500">
            <div className='flex -space-x-1'>
                <span className="w-5 h-5 rounded-full bg-(--color-blaze-amber) border border-(--color-blaze-white) text-xs text-[9px] flex items-center justify-center">VM</span>
                <span className="w-5 h-5 rounded-full bg-(--color-blaze-unknown) border border-(--color-blaze-white) text-[9px] flex items-center justify-center">EK</span>
                <span className="w-5 h-5 rounded-full bg-(--color-blaze-stone) border border-(--color-blaze-white) text-[9px] flex items-center justify-center">JM</span>
            </div>

            <span>Join focused people building better days</span>
        </div>
        </>
    )
}