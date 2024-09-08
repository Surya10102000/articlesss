import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Homepage from "./pages/HomePage";
import { useState } from "react";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import { useRecoilState } from "recoil";
import { isAdminState } from "./recoil/atom";
import EditBlogPage from "./pages/EditBlogPage";

function App() {
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState)
  return (
    <main className="p-2 max-w-2xl mx-auto">
      <Navbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<EditBlogPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/:id" element={<AdminPage/>}/>
      </Routes>
    </main>
  );
}

export default App;
