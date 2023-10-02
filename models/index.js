// import { string } from 'joi';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true ,
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
    
})

const  user = mongoose.model('users',userSchema)


export default user ;

// const blogSchema = new Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs: Number
//     }
//   });