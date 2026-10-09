import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {FaArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Cta() {
    return(
    <>
    <div className="flex items-center justify-center-safe bg-clip-paddingnpm">
        <Button className={'bg-orange-600 hover:bg-orange-700 rounded-2xl-md border-2 shadow-sm text-white text-xs flex items-center gap-2 px-3 py-2'}>
            <Link to={'/login'}>Get started free</Link>
            {/* <FontAwesomeIcon icon={FaArrowRight} /> */}
        </Button>
        <span>

        </span>
        <Button className={'bg-white text-black text-xs border-2 rounded-2xl-md border-black hover:bg-gray-200'}>
            <Link to={'/explore'}>Explore Blaze DHT</Link>
        </Button>
    </div>
    </>
    )
};