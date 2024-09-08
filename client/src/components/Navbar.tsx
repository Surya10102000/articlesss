import { Link } from "react-router-dom"
import { isAdminState } from "../recoil/atom"
import { useRecoilState } from "recoil"

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState)

  return (
    <header className="flex justify-between">
        <Link className="font-extrabold text-2xl" to="#"> logo </Link>
        <nav className="flex gap-2">
            <Link to="#">Home</Link>
            {isAdmin && <Link to="#">Admin</Link>}
        </nav>
    </header>
  )
}
export default Navbar