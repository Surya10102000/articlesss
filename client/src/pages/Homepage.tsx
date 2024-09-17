import LoadingIcon from "@/components/Loading"
import { Button } from "@/components/ui/button"
import { userState } from "@/recoil/atom"
import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"

const Homepage = () => {
  const user = useRecoilValue(userState)  
  
  return (
    <div>Homepage
      

      {user ? (
        <>
          <Link to='/secret'>secret</Link>
          <button >Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Button disabled ><LoadingIcon/><span>loading</span></Button>
    </div>
  )
}
export default Homepage