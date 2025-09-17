import {app} from './app.js'

app.get("/",(req,res)=>{
    res.status(200).json({
        message:'Hello World!'
    })
})

app.get("/login",(req,res)=>{
    res.send("Hello From Login")
})
app.listen(process.env.PORT,()=>{
    console.log(`NodeJS Server Started at port no: ${process.env.PORT}`)
})