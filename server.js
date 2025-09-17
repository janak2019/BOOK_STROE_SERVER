import {app} from './app.js'
const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.status(200).json({
        message:'Hello World!'
    })
})

app.get("/login",(req,res)=>{
    res.send("Hello From Login")
})
app.listen(PORT,()=>{
    console.log(`NodeJS Server Started at port no:${PORT} `)
})