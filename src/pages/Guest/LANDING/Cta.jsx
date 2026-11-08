import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {FaArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Cta() {
    return(
    <>
    <div className="
    flex items-center justify-center gap-5">
        <Button className='
        bg-(--color-blaze-ember) 
        hover:bg-(--color-blaze-tangerine) 
        rounded-2xl 
        border-2 
        shadow-3xl 
        text-white 
        text-md 
        font-bold 
        flex items-center 
        gap-7 
        px-5 
        py-5'>

            <Link to= {'/login'} >Get started </Link>
            {/* <FontAwesomeIcon icon={FaArrowRight} /> */}
        </Button>
        <span>

        </span>
        <Button className={'bg-white border border-gray-200 text-gray-700 text-xs font-medium px-5 py-5 rounded-2xl shadow-2xl hover:bg-gray-200'}>
            <Link to={'/explore'}>Explore Blaze DHT</Link>
        </Button>
    </div>
    </>
    )
};