import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="create" element={<CreateBlog />} />
        <Route path="edit/:id" element={<EditBlog />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
