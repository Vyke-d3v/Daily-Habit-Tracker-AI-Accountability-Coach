// "use client";
// import { CalendarNavButton } from "@heroui/react";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { useState } from "react";


    function Register(){

    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
    })
    
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } =e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };


// create a validation
        const ValidateForm =() => {

            const errors={}

            if (!formData.username.trim()){
                errors.name=" Enter a valid Username"
            }
            if (!formData.email.trim()){
                errors.email="Email is Required."
            }
            else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
            ){
                errors.email="Enter A valid Email"
            }
            if (!formData.password){
                errors.password="The password is not valid."
            }
            else if(formData.password.length<6){
                errors.password="The password must have more than 6 characters"
            }

            return errors
        };
        const handleSubmit = (e) => {
            e.preventDefault();

            const validationErrors = ValidateForm();

            if (Object.keys(validationErrors).length > 0) {
                setError(validationErrors);
                return;
            }
            setError([]);

            console.log("Registration was SUCCESSFUL")
            console.log("formData");
        }
        
        return(
            <>
                <div className="Login-heading">
                    <h3>Create Your Account</h3>
                    <p>Start tracking your daily Habits.</p>
                </div>
    {/* Created a Registration form */}
                <div className="Registration-form">
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="name">username.</label>

                        <input type="text" 
                        name="username" id="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        placeholder="Eg. Echocoach_2026"
                        />

                        {error.username && (
                            <p className="error">{error.username}</p>
                        )}

                        <label htmlFor="email">Email.</label>

                        <input type="email" 
                        name="user-email" 
                        id="user-email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Eg. echocoach@gmail.com" 
                        required 
                        />

                        {error.email && (
                            <p className="error">{error.email}</p>
                        )}

                        <label htmlFor="password">Password.</label>

                        <input type="password"
                        name="user-password" 
                        id="user-password" 
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Eg. echocoach@2026" 
                        />
                        description

                        {error.password && (
                            <p className="error">{error.password}</p>
                        )}

                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                    <div className="Register-alt">
                        <button type="button">Continue With Google.</button>
                        <span></span>
                        <span></span>
                        <p>
                            Already have an account? 
                            <Link to="login"> Log in</Link>
                        </p>

                    </div>

                </div>

            </>
        );
    }

    export default Register;