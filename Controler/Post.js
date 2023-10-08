import express from "express";
import User from "../models/index.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import Joi from "joi";
import Verifytoken from "../VerifyToken/index.js";
import {AddPost , GetAllPosts} from "../Services/Post.js"


const router = express.Router();

const postJoiSchema = Joi.object({
  title: Joi.string().required(),
  post:Joi.string().required(),
  author: Joi.string().required()
});

router.post("/post",async(req,res)=>{
    try{
        await postJoiSchema.validateAsync(req.body);
        const post = await AddPost(req.body)
        console.log(post)
        res.status(200).send({"message": "success",status : 200, post})
    }
    catch(err){
        res.status(404).send({"messge":err.message})
    }
})

router.get("/",async(req,res)=>{
    try{

        const allPosts = await GetAllPosts()
        res.status(200).send({"message": "success","status" : 200, allPosts})
    }catch(error){
        res.status(400).send({"message": error.message})
    }
})

export default router