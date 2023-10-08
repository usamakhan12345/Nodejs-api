import Post from "../models/Post.js"


const AddPost =async(data)=>{
    const post  = await new Post(data).populate("author")
    return await post.save()
}   

const GetAllPosts = async () =>{
    return Post.find({})
}

export{
    AddPost,
    GetAllPosts
}