import {app} from './app.js'

app.get("/",(req,res)=>{
    res.status(200).json({
        message:'Hello World!'
    })
})
app.listen(process.env.PORT,()=>{
    console.log(`NodeJS Server Started at port no: ${process.env.PORT}`)
})