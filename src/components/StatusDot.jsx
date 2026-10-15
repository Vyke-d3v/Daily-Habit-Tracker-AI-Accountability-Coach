
export default function StatusDot(){
    return(
        <>
        <div className="inline-flex items-center gap- px-2 rounded-full border border-orange-200/60 bg-orange-500/20">
            <span className="relative flex items-center justify-center">
                <span className="absolute h-1 w-1.5 rounded-full  bg-orange-500/20"></span>
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            </span>
        </div>
        </>
    )
}