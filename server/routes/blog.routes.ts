import express from "express"
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.middleware"
import { createBlog, publishPost } from "../controllers/blog.controllers"

const router = express()

router.post('/demo', ensureAuthenticated, (req, res)=>{
    const result = "isauthenticated"
    const { title , summary , content} = req.body
    res.json({ message : result,
        request : req.user,
       title : title.length,
       summary : summary.length,
       content : content.length
    })
})

router.post("/create",ensureAuthenticated, createBlog); //create a new blog
router.post("/publish/:id",ensureAuthenticated, publishPost) // publish blog post
// router.post("/save/:id", saveBlog) //Save blog post as draft
// router.patch("/update/:id", updateBlog) // Update a specific fields of a blog post
// router.delete("/delete/:id", deleteBlog) 
// router.get("/:id", getPost)
// router.get("blogs", getPosts)


// TODO :
// 1. article can be saved to the db - on controller for that
// 2. article publish controller



export default router