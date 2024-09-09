import axios from "axios";
import { Navigate } from "react-router-dom";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post("/api/auth/login", credentials);
  return response.data;
};

export const registerUser = async (data: {
  email: string;
  password: string;
  username: string;
}) => {
  const response = await axios.post("/api/auth/register", data);
  return response.data;
};

export const fetchUser = async (uid: string, token: string) => {
  const response = await axios.get(`/api/user/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
