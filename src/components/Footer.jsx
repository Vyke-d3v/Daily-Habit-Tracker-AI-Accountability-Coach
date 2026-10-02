import { Link, Separator, Button } from "@heroui/react";
import logo from '../assets/blaze-dht-assets/logo/blaze-logo.svg'

function Footer (){

    return (
        <>
            <footer className="w-full border-t border-divider bg-content1 text-foreground bg bg-orange-200">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="lg:col-span-2">
                        <img src={logo} alt="footer blaze logo" />
                    </div>
                    <h3>Quick links</h3>
                    <div className="contactlinks">
                        <h4>Get Intouch</h4>
                        {/* <a href="tel:0739589044">Journal on Whatsapp</a> */}
                        <Link href='tel:+254 707 302308'>Reach out on WhatsApp</Link>
                        <Link href="mailto:echocoach@gmail.com">Mail us</Link>
                    </div>
                    <p>&copy; Echocoach.ai daily habit tracker 2026</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;