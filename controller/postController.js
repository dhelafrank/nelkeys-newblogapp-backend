const fs = require("fs")
const path = require("path")
const { post } = require("..")
const postDataPath = path.join(__dirname, "../data/post.json")


const postClass = class posts {
    allPosts() {
        try {
            const postsData = fs.readFileSync(postDataPath, "UTF-8")    
            return JSON.parse(postsData)
        } catch (error) {
            console.error(error)
        }
    }

    byID(id){
        try {
            const postsData = fs.readFileSync(postDataPath, "UTF-8")    
            const allPosts = JSON.parse(postsData)
            let foundPost = allPosts.find(post => post.id == id) || {"Error":`Post With ID ${id} doesn't exist`}
            return foundPost
        } catch (error) {
            console.error(error)
        }
    }

    byBlob(blob){
        try {
            const postsData = fs.readFileSync(postDataPath, "UTF-8")    
            const allPosts = JSON.parse(postsData)

            const decodedBlob = blob.replace("-" && "_", " ")
            let foundPost = allPosts.find(post => post.title == decodedBlob) || {"Error":`Post doesn't exist`}
            return foundPost
        } catch (error) {
            console.error(error)
        }
    }

    featured(){
        try {
            const postsData = fs.readFileSync(postDataPath, "UTF-8")    
            let data = JSON.parse(postsData)
            return data.splice(0, 3)

        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = {postClass}