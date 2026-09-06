
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@heroui/react";
import { TextField, Input, Label, FieldError } from "@heroui/react";
import { Link } from "react-router-dom";

import { useState } from "react";


function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Enter a valid Username";
    }
    if (formData.username.length<=0){
      errors.username = "Username cannot be empty"
    }
    if (!formData.email.trim()) {
      errors.email = "Email is Required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter A valid Email";
    }
    if (!formData.password) {
      errors.password = "The password is not valid.";
    } else if (formData.password.length < 6) {
      errors.password = "The password must have more than 6 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    setError({});

    console.log("Registration was SUCCESSFUL");
    console.log(formData);
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-start gap-1">
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>Start tracking your daily Habits.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextField
              name="username"
              isInvalid={!!error.username}
              errorMessage={error.username}
            >
              <Label>Username</Label>
              <Input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
                placeholder="Eg. Echocoach_2026"
              />
              <FieldError />
            </TextField>

            <TextField
              name="email"
              isInvalid={!!error.email}
              errorMessage={error.email}
            >
              <Label>Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Eg. echocoach@gmail.com"
              />
              <FieldError />
            </TextField>

            <TextField
              name="password"
              isInvalid={!!error.password}
              errorMessage={error.password}
            >
              <Label>Password</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="Eg. echocoach@2026"
              />
              <FieldError />
            </TextField>

            <Button type="submit" fullWidth variant="solid" color="secondary">
              Submit
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-3">
          <Button type="button" variant="bordered" fullWidth>
            Continue With Google
          </Button>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
