import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "@/recoil/atom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingIcon from "@/components/Loading";

// Define form input types
interface ILoginInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    try {
      setLoading(true);
      setServerError("");
      setSuccessMessage("");

      const response = await axios.post(
        "http://localhost:3000/api/auth/login", // Replace with your API endpoint
        data,
        { withCredentials: true } // This is required for cookie-based sessions
      );
      setLoading(false);

      if (response.status === 201) {
        setSuccessMessage("Login successful!");
        setUser(response.data.user);
        // Navigate to profile page after successful login
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        // Server responded with a status other than 2xx
        setServerError(error.response.data.message);
      } else {
        // Something else went wrong
        setServerError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="p-2">
      <div className="max-w-md lg:max-w-lg my-20">
        <h2 className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl">Login</h2>
        <p className="text-2xl lg:text-3xl">
          Access your dashboard, manage your content, and stay connected.
        </p>
      </div>
      <form className="space-y-2 my-24" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label className="text-lg">Email</label>
          <Input className="text-lg py-5"
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
          <Input className="text-lg py-5"
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
          New here? <Link className="underline ml-1 hover:text-yellow-500" to="/register">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
