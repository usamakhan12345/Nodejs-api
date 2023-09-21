import express from "express"
import { PRODUCTS } from "../Constants/index.js"
const router = express.Router()


router.get('/',(req,res)=>{
    res.status(200).send(PRODUCTS)
})

export default router ;