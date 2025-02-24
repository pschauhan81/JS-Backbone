require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req, res)=>{
    res.send("Welcome Home Page")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at ai Self Her</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome my you Tube Channel </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
