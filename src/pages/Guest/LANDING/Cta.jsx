import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {FaArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Cta() {
    return(
    <>
    <div className="flex items-center gap-2 justify-center">
        <Button className={'bg-orange-600 hover:bg-orange-700 rounded-2xl-md border-2 shadow-sm text-white text-xs flex items-center gap-2 px-3 py-2'}>
            <Link to={'/login'}>Get started free</Link>
            {/* <FontAwesomeIcon icon={FaArrowRight} /> */}
        </Button>
        <span>

        </span>
        <Button className={'bg-white border border-gray-200 text-gray-700 text-xs font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-200'}>
            <Link to={'/explore'}>Explore Blaze DHT</Link>
        </Button>
    </div>
    </>
    )
};