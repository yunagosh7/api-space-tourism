const express = require("express")
const cors = require("cors")
const api = require("./data.json")
const PORT = process.env.PORT || 3000

const app = express();



app.get('/',cors() ,(req,res)=>{
    res.json(api)
})


app.listen(PORT)