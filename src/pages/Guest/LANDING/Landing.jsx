import Cta from "./Cta";
import Eyebrow from "./Eyebrow";
import Socialproof from "./SocialProof";
import Product from "../PRODUCTS/Product";

export default function Landing(){
    return(
    <>
            <Eyebrow/>
        <div>
            <h1 className="text-6xl justify-center text-center font-medium font-family-sans"> 
                Build habits that<br/> actually <h1 className="text-orange-700 font-medium">
            stick
            </h1>
        
            </h1>
        <p className="text-sm text-center font-family-sans gap-2 px-5 py-10 italic font-stretch-100%">
            Track your daily habits, <br/> understand your consistency and get peresonalized accountability whenever you need it.
        </p>
        <Cta />
        <Socialproof />
        <Product/>
    </div>
    </>
)
};