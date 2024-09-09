import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <header className="flex justify-between">
        <Link className="font-extrabold text-2xl" to="#"> logo </Link>
        <nav className="flex gap-2">
            <Link to="#">Home</Link>
            <Link to="#">Admin</Link>
        </nav>
    </header>
  )
}
export default Navbar