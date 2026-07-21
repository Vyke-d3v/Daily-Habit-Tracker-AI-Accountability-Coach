import { useState } from "react";


    function Register(){
        
        return(
            <>
            <div className="Login-heading">
                <h3>Create Your Account</h3>
                <p>Start tracking your daily Habits.</p>
            </div>
            <div className="Registration-form">
                <form action="Register">
                    <label htmlFor="name">Username</label>
                    <input type="text" name="user-name" id="user-name" placeholder="Eg. Vyke Muriithi"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="user-email" id="user-email" placeholder="Eg. muriithivyke@gmail.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="user-password" id="user-password" placeholder="Eg. echocoach@2026" />
                </form>
                <div className="Register-alt">
                    <p>Or <br />Continue With Google.</p>
                    <span></span>
                    <span></span>
                    <p>Already have an account? <Link to="login"> Log in</Link></p>
                </div>
            </div>
            </>
        );
    }

    export default Register;