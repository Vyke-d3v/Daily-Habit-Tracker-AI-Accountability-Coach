
export default function StatusDot(){
    return(
        <>
        <div 
        className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-(--color-blaze-transOrange) bg-(--color-blaze-lowOpc)"
        >
            <span className="relative flex items-center justify-center">
                <span className="absolute h-0.5 w-1. py-2 px-2 rounded-full  bg-(--color-blaze-transOrange)"></span>
                <span className="h-2 w-2 rounded-full bg-(--color-blaze-orange)"></span>
            </span>
        </div>
        </>
    )
}