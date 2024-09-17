import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/components/Loading";

// Define form input types
interface IFormInput {
  username: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setLoading(true);
      setServerError("");
      setSuccessMessage("");

      const response = await axios.post(
        "http://localhost:3000/api/auth/signup", // Replace with your actual API endpoint
        data,
        { withCredentials: true } // To include cookies if needed
      );

      setLoading(false);

      if (response.status === 201) {
        setSuccessMessage("User registered successfully!");
        // Navigate to login page after a short delay
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        // Handle server errors
        setServerError(error.response.data.message);
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="p-2">
      <div className="max-w-md lg:max-w-lg my-20">
        <h2 className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl">
          Create your account
        </h2>
        <p className="text-2xl lg:text-3xl">It’s quick and easy!</p>
      </div>
      <form className="space-y-2 my-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label className="text-lg">Username</label>
          <Input
            className="text-lg py-5"
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-700">{errors.username.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-lg">Email</label>
          <Input
            className="text-lg py-5"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-lg">Password</label>
          <Input
            className="text-lg py-5"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-700">{errors.password.message}</p>
          )}
        </div>

        <Button className="bg-black" type="submit" disabled={loading}>
          {loading ? <div className="flex"><LoadingIcon/><span>loading</span></div> : "Login"}
        </Button>

        {serverError && <p className="text-red-700">{serverError}</p>}
        {successMessage && <p className="text-green-800">{successMessage}</p>}
        <p className="text-lg">
          Already have an account? <Link className="underline ml-1 hover:text-yellow-500" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
