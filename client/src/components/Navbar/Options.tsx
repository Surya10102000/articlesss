import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
// import { useRecoilValue } from "recoil";
// import { userAuthState } from "@/recoil/atom";

const Options = () => {

    // const userAuth = useRecoilValue(userAuthState)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant='outline'>menu</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Manage Blogs</DropdownMenuItem>
        {/* {userAuth?.role === "admin" && (
          <DropdownMenuItem>Admin</DropdownMenuItem>
        )} */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Options;
