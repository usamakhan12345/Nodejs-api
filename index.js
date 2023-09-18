const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

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

app.get('/users', (req, res) => {
  res.send(users)
})

app.post("/user",(req,res)=>{
  users.push({id : users.length + 1 , ...req.body})
    res.send({message : "user add successfuly"})
})

app.put("/updateuser/:id",(req,res)=>{
  const index = users.findIndex((v)=> v.id === Number(req.params.id))
  users.splice(index,1,req.body)
  res.send({message : "user updated"})
})
app.delete("/deleteuser/:id",(req,res)=>{

  const index = users.findIndex((v)=> v.id === Number(req.params.id))
  users.splice(index,1)
  res.send({message : "user Delted successfuly"})
  

})


app.post("/placeorder",(req,res)=>{
    console.log(req.body)
  PlaceOrder.push(req.body)
  res.send({message : "order placed successfly"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})