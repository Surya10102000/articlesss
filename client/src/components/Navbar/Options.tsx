import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/atom";
import { useState } from "react";
import axios from "axios";

const Options = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);

  async function logout() {
    try {
      if (loading) {
        return;
      }
      setLoading(true);
      await axios.delete(
        "http://localhost:3000/api/auth/logout",
        { withCredentials: true }
      );
      console.log("user session deleted");

      setUser(null);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Manage Blogs</DropdownMenuItem>
        {user && (
          <DropdownMenuItem onClick={() => logout()} className="text-red-400">
            Logout
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Options;
