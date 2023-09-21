import express from "express"

const router = express.Router()

const userData = {
    "name":"usama khan",
}

router.get("/",(req,res)=>{
    res.status(200).send({"message" :userData})
})

export default router