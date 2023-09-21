import express from "express"
import cors from "cors"
import router from "./Routes/index.js"
const app = express()
const port = 3000

app.use(express.json())
app.use(cors());
const users = [
    {
        id : 1,
        name : 'usama khan',
        email : 'usamakhan@gmail.com'

    },
    {
        id: 2,
        name : 'hammi khan',
        email : 'hammikhan@gmail.com'

    }
]

const PlaceOrder = [
  
]
app.use('/',(req,res,next)=>{
    if(req.query.apiKey === '12345'){

      next()
    }else{
      res.status(404).send({"message" : "api key not match"})
    }
})
app.use('/api',router)

// app.get('/users', (req, res) => {
//   res.send(users)
// })

// app.post("/user",(req,res)=>{
//   users.push({id : users.length + 1 , ...req.body})
//     res.send({message : "user add successfuly"})
// })

// app.put("/updateuser/:id",(req,res)=>{
//   const index = users.findIndex((v)=> v.id === Number(req.params.id))
//   users.splice(index,1,req.body)
//   res.send({message : "user updated"})
// })
// app.delete("/deleteuser/:id",(req,res)=>{

//   const index = users.findIndex((v)=> v.id === Number(req.params.id))
//   users.splice(index,1)
//   res.send({message : "user Delted successfuly"})
  

// })


// app.post("/placeorder",(req,res)=>{
//     console.log(req.body)
//   PlaceOrder.push(req.body)
//   res.send({message : "order placed successfly"})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})