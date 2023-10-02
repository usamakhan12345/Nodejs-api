import jwt from "jsonwebtoken";

const Verifytoken = (req,res,next)=>{
    const {headers} = req

    console.log("middile ware working",headers.authorization.split(" ")[1])
    const token = headers.authorization.split(" ")[1]

    jwt.verify(token, 'SMIT', function(err, decheadoded) {
        // console.log(decoded.foifo) // bar
        if(err){
            return res.status(404).send({message: "unauthorized",err :  err.message})
        }

        next()
      });
}

export default Verifytoken