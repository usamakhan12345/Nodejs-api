import express from "express"
import user from "./User.js"
import products from "./Products.js"
import upload from "./Upload.js"

const router = express.Router()

router.use('/user', user)
router.use('/products', products)
router.use('/upload', upload)




export default router ;