import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Register from "./pages/Auth/Registratoin";
import LoginPage from "./pages/Auth/LoginPage";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import FooterNew from "./components/Footer/FooterNew";
import CreateBlog from "./pages/CreateBlog";
import ManageBlogsPage from "./pages/ManagePostsPage";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-2 ">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage"
            element={
              <ProtectedRoute>
                <ManageBlogsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/blog/:blogId" element={<BlogPage/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div></div>
      </main>
      {/* <Footer /> */}
      <FooterNew />
    </>
  );
}

export default App;
