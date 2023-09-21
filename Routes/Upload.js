import express from "express"
const router = express.Router()

import multer from "multer"


// const upload = multer({ dest: 'Images/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Images/')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



router.post('/',upload.single('file'),(req,res)=>{
            res.status(200).send({"message" : "file uploaded"})
})

export default router