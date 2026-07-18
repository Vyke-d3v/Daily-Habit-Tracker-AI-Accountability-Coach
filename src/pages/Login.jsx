import { Link } from "react-router-dom";
function Login (){
    return(
        <>
            <div className="Login-heading">
                <h3>Welcome Back</h3>
                <p>Start tracking your daily Habits.</p>
            </div>
            <div className="Login-form">
                <form action="Register">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="user-name" id="user-name" placeholder="Eg. Vyke Muriithi"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user-email" id="user-email" placeholder="Eg. muriithivyke@gmail.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="user-password" id="user-password" placeholder="Eg. echocoach@2026" />

                </form>

            </div>
            <div className="loginAlt">
                <p>Or <br/> Continue With Google.</p>
                <p>You don't have an account? <Link to="register">Register</Link></p>
            </div>
        </>
    );
}

export default Login;