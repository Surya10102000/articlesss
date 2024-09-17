import { userState } from "@/recoil/atom";
import axios from "axios";
import { useSetRecoilState } from "recoil";

export const useLogout = () => {
  const setUser = useSetRecoilState(userState);

  const logout = async () => {
    await axios.post(
      "http://localhost:3000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    setUser(null);
  };
  return logout;
};
