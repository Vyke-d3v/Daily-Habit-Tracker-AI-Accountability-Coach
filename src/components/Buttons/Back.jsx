import { useNavigate } from "react-router-dom";


export default function Back({label= 'Back'})
{
const navigate = useNavigate();
const handleBack = ()=>{
    if (window.history.length >1) {
        navigate(-1);
    }
    else{
        navigate('/')
    }
}
return(
    <button 
    onClick={handleBack}
    className="flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-zinc-100 transition">
        {label}
    </button>
)
}