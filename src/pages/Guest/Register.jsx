// "use client";
// import { CalendarNavButton } from "@heroui/react";
// import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
// import { useState } from "react";


    function Register(){

    const {se}

// create a validation
        const ValidateForm =() => {
            const errors={}

            if (!username.trim()){
                errors.username=" Enter a valid Username"
            }
            if (email.trim()){
                errors.email="Enter a valid Email."
            }
            if (!password){
                errors.password="The password is not valid."
            }
            else if(!password){
                errors.password="The password must have more than 4 characters"
            }

            return errors
        }
        
        return(
            <>
            <div className="Login-heading">
                <h3>Create Your Account</h3>
                <p>Start tracking your daily Habits.</p>
            </div>
{/* Created a Registration form */}
            <div className="Registration-form">
                <form action="Register">
                    <label htmlFor="name">Name.</label>
                    <input type="text" name="name" id="name" placeholder="Eg. Echo Coach"/>
                    <label htmlFor="email">Email.</label>
                    <input type="email" name="user-email" id="user-email" placeholder="Eg. echocoach@gmail.com" required />
                    <label htmlFor="password">Password.</label>
                    <input type="password" name="user-password" id="user-password" placeholder="Eg. echocoach@2026" />
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <div className="Register-alt">
                    <button type="button">Continue With Google.</button>
                    <span></span>
                    <span></span>
                    <p>Already have an account? <Link to="login"> Log in</Link></p>
                </div>
            </div>
            </>
        );
    }

    export default Register;