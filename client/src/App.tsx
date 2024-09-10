import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Homepage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import EditBlogPage from "./pages/EditBlogPage";
import Register from "./pages/Auth/Registratoin";
import LoginPage from "./pages/Auth/LoginPage";
import ManageBlogsPage from "./pages/ManageBlogsPage";
import { ProtectedRoute } from "./api/protectedRoute";


function App() {
  return (
    <>
      <Navbar />
      <main className="p-2 max-w-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<ProtectedRoute><EditBlogPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/:id" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<ProtectedRoute><ManageBlogsPage/></ProtectedRoute>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
