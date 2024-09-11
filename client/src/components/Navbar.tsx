import { Link } from "react-router-dom"
import { Button } from "./ui/button";
import Options from "./Navbar/Options";

const Navbar = () => {
  let token = localStorage.getItem('token');
  return (
    <header className="flex justify-between p-4">
        <Link className="font-extrabold text-2xl" to="/"> logo </Link>
        <nav className="flex gap-2">
            <Link to="/"><Button variant='link'>Home</Button></Link>
            {token ? <Options/> : <Link to="/login"><Button >Join</Button></Link> }
        </nav>
    </header>
  )
}
export default Navbar