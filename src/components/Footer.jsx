// import { Link, Separator, Button } from "@heroui/react";
import { Typography } from "@heroui/react";
import logo from '../assets/blaze-dht-assets/logo/blaze-logo.svg'

function Footer (){

    return (
        <>
            <footer className="z-40 w-full border-b border-neutral-200 border-r backdrop-blur-lg">
                <div className="mx-auto max-w-7xl px-6 py-13 lg:px-8 flex items-center justify-between">
                    <div className="lg:col-span-2">
                        <img src={logo} alt="footer blaze logo" className="h-20" />
                    </div>
                    <div className="mt-8 flex justify-center space-x-6 lg:mt-0 lg:justify-start">
                        <Typography>Build Consistency. Stay accountable</Typography>
                    </div>
                    <div>
                    <p>&copy; Echocoach.ai daily habit tracker 2026</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;