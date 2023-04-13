import express from 'express'
import index from './routes/index.router.js'
import niveles  from './routes/nivel.router.js'

 const app =express()
 app.use(express.json())


app.use(index)
app.use(niveles)

 app.use((req,res)=>{
    res.status(404).json({
        message:"no se encuentra"
    })
 })

 export default app