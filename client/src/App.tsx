import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import EditBlogPage from "./pages/EditBlogPage";
import Register from "./pages/Auth/Registratoin";
import LoginPage from "./pages/Auth/LoginPage";
import SecretPage from "./pages/SecretPage";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import FooterNew from "./components/Footer/FooterNew";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-2 max-w-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <EditBlogPage />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <SecretPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {/* <Footer /> */}
      <FooterNew/>
    </>
  );
}

export default App;
