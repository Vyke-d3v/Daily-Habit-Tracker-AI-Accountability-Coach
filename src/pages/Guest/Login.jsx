import { Button, Input, Label } from "@heroui/react";
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
// import {back} from ;

import logo from "../../assets/blaze-dht-assets/logo/blaze-symbol.svg"
// import Back from "../../components/Buttons/Back";


export default function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/habits", { replace: true });
        } catch (authError) {
            setError(authError.code === "auth/invalid-credential"
                ? "The email or password is incorrect."
                : "Unable to log in. Check your details and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }
    const navigated=useNavigate();
    const handlePage= ()=>{
        if(window.history.length>1){
            navigated(-1)
        }
        else{
            navigated('/')
        }
    }

    return(
        <>
        <div className="w-full flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-md" color="">
            <Button onClick={handlePage} className="flex items-center gap-2 px-3 py-4 rounded-full bg-orange-300 hover:bg-orange-700">x</Button>
                        <div className="flex items-center">
                            <img src={logo} alt="Blaze DHT logo" className=" flex items-center px-30 py-2 h-40"/>
                        </div>

                    <CardHeader className="flex flex-col items-center gap-1 ">
                        <div className="Login-heading">
                            <CardTitle className="flex items-center ">
                                <h3 className="">Welcome Back</h3>
                            </CardTitle>
                            <CardDescription>
                                <p>Start tracking your daily Habits.</p>
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="Login-form">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Eg. echocoach@gmail.com" required />
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Your password" required />

                                {error && <p role="alert" className="text-red-600">{error}</p>}
                                <Button type="submit" isDisabled={isSubmitting} 
                                className="bg-orange-600 hover:bg-amber-800 transition">    
                                    {isSubmitting ? "Logging in..." : "Log In"}
                                </Button>

                            </form>

                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center gap-3">
                        <div className="loginAlt">
                            <p>You don't have an account? {" "}<Link to="/register" className="text-orange-600 hover:underline">Register</Link></p>
                        </div>
                        <div>

                        </div>
                    </CardFooter>
            </Card>
        </div>
        </>
    );
};