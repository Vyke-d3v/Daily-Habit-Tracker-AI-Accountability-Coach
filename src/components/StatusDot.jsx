
export default function StatusDot(){
    return(
        <>
        <div 
        className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-orange-200/20 bg-orange-500/20"
        >
            <span className="relative flex items-center justify-center">
                <span className="absolute h-1 w-1. rounded-full  bg-orange-500/20"></span>
                <span className="h-3 w-3 rounded-full bg-orange-500"></span>
            </span>
        </div>
        </>
    )
}