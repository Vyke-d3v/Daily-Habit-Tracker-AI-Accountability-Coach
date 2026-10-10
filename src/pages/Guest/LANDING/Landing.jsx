import Cta from "./Cta";
import Eyebrow from "./Eyebrow";
import Socialproof from "./SocialProof";
import Product from "../PRODUCTS/Product";

export default function Landing(){
    return(
    <>
        <div>
            <Eyebrow/>
        <h1>
            Build habits that will actually <h1 className="text-orange-700">
            stick
            </h1> 
        </h1>
        <p>
            Track your daily habits, understand your consistency and get peresonalized accountability whenever you need it.
        </p>
        <Cta />
        <Socialproof />
        <Product/>
    </div>
    </>
)
};