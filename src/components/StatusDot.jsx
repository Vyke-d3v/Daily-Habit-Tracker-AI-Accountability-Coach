
export default function StatusDot(){
    return(
        <>
        <div className="inline-flex items-center gap-2.5 px-2 rounded-full border border-orange-200/60 bg-white/40">
            <span className="relative flex items-center justify-center">
                <span className="absolute h-3 w-3.6 rounded-full  bg-orange-500/20"></span>
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            </span>
        </div>
        </>
    )
}