import { userState } from "@/recoil/atom";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useRecoilValue(userState);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;