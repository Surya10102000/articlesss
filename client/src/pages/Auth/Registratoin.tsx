import { errorState, loadingState } from "@/recoil/atom";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error , setError] = useRecoilState(errorState)
  const [isLoading, setLoading] = useRecoilState(loadingState)

  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();

    setLoading(true)
    setError("")
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        email: formData.email,
        password: formData.password,
        username : formData.username
      });

      if (response.ok) {
        setLoading(false)
        // Successful registration, redirect to login page
        navigate("/login");
      } else {
        // Handle server-side validation errors
        setLoading(false)
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
