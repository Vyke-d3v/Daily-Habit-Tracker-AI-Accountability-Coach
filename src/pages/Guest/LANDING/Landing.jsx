import Cta from "./Cta";
import Eyebrow from "./Eyebrow";
import Socialproof from "./SocialProof";
import Product from "../PRODUCTS/Product";
import Feature from "./Feature";

export default function Landing(){
    return(
    <>
            <Eyebrow/>
        <div>
            <h1 className="text-8xl justify-center text-center font-bold text-(--color-blaze-text)"> 
                Start to build <br /> habits that actually<h1 className="text-(--color-blaze-ember) font-bold text-8xl">Stick</h1>
        
            </h1>
        <p className="text- text-center font-family-sans gap-2 px-5 py-10 italic font-stretch-100% text-(--color-blaze-text)">
            Track your daily habits, understand your consistency,  and get <br/> peresonalized accountability whenever you need it.
        </p>
        <Cta />
        <Socialproof />
        <Product/>
        <Feature/>
    </div>
    </>
)
};