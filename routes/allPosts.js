const express = require("express")
const router = express.Router()
const postController = require("../controller/postController")

const postControllerClass = new postController.postClass()

router.get("/all", (req, res)=>{
        try {
            res.send(postControllerClass.allPosts())
        } catch (error) {
            console.log(error);
        }
})

router.get("/featured", (req, res)=>{
    try {
        res.send(postControllerClass.featured())
    } catch (error) {
        console.log(error);
    }
})

router.get('/id/:id', (req, res) => {
    try {
        res.send(postControllerClass.byID(req.params.id))
    } catch (error) {
        console.log(error);
    }
})

router.get('/blob/:blob', (req, res) => {
    try {
        res.send(postControllerClass.byBlob(req.params.blob))
    } catch (error) {
        console.log(error);
    }
})



module.exports = router