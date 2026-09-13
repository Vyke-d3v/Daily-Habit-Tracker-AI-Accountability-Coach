import { Button, Input, Label } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";


function Login (){
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

    return(
        <>
            <div className="Login-heading">
                <h3>Welcome Back</h3>
                <p>Start tracking your daily Habits.</p>
            </div>
            <div className="Login-form">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Eg. echocoach@gmail.com" required />
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Your password" required />

                    {error && <p role="alert" className="text-red-600">{error}</p>}
                    <Button type="submit" isDisabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Log In"}
                    </Button>

                </form>

            </div>
            <div className="loginAlt">
                <p>You don't have an account? {" "}<Link to="/register" className="text-blue-600 hover:underline">Register</Link></p>
            </div>
        </>
    );
}

export default Login;