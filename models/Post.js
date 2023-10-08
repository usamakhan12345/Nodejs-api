// import { string } from 'joi';
import mongoose from 'mongoose';
import users from "./index.js"
const { Schema } = mongoose;

const postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    post : {
        type : String,
        required : true,
        unique : true ,
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
    
})

const  post = mongoose.model('Posts',postSchema)


export default post ;