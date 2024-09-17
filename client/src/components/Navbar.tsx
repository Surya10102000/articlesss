import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Options from "./Navbar/Options";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/atom";

const Navbar = () => {
  const loading = useAuthCheck();
  const user = useRecoilValue(userState);

  return (
    <header className="flex justify-between p-4">
      <Link className="font-extrabold text-3xl" to="/">
        logos
      </Link>
      <nav className="flex gap-2">
        <Link to="/">
          <Button variant="link">Home</Button>
        </Link>
        {!loading &&
          (user ? (
            <Options />
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          ))}
      </nav>
    </header>
  );
};
export default Navbar;
