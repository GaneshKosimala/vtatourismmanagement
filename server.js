const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'public')));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile('index.html',{
        root:path.join(__dirname,'./public')
    })
})

const PORT = process.env.PORT || 5000



app.listen(PORT,()=>{console.log("server is up and running")})