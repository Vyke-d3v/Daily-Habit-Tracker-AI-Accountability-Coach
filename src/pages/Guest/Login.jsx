// "use client";

// import {Check} from "gravity-ui/icons";
import {Button, Form, Input, Label, TextField,} from "@heroui/react";
// import {Button, Description, FieldError, Form, Input, Label, Textfield} from "@heroui/react";
// import {Button, Description, FieldError, Form, Input, Label, Textfield} from "@heroui/react";
import { Link } from "react-router-dom";
// import { useState } from "react";


function Login (){

    // const [formData,setFormData]
    return(
        <>
            <div className="Login-heading">
                <h3>Welcome Back</h3>
                <p>Start tracking your daily Habits.</p>
            </div>
            <div className="Login-form">
                <Form action="Register">
                    <Label htmlFor="name">Username</Label>
                    <Input type="text" name="user-name" id="user-name" placeholder="Eg. Echocoach_2026"/>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="user-email" id="user-email" placeholder="Eg. Echocoach_2026" />
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="user-password" id="user-password" placeholder="Eg. echocoach@2026" />

                    <Button>
                        <button type="reset" 
                        className="
                    
                        text-white px-4 py-2 rounded" variant>Log In</button>
                    </Button>

                </Form>

            </div>
            <div className="loginAlt">
                <p>Or <br/> Continue With Google.</p>
                <p>You don't have an account? {" "}<Link to="/register" className="text-blue-600 hover:underline">Register</Link></p>
            </div>
        </>
    );
}

export default Login;