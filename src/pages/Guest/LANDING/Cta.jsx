import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import {FaArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Cta() {
    return(
    <>
    <div className="flex items-center justify-center-safe bg-clip-paddingnpm">
        <Button className={'bg-orange-800 hover:bg-orange-600 rounded-2xl-md border-2 border-black'}>
            <Link to={'/login'}>Get started free</Link>
            {/* <FontAwesomeIcon icon={FaArrowRight} /> */}
        </Button>
        <span>

        </span>
        <Button className={'bg-white text-black border-2 rounded-2xl-md border-black hover:bg-gray-200'}>
            <Link>Explore Blaze DHT</Link>
        </Button>
    </div>
    </>
    )
};