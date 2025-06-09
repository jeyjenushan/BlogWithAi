import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app=express();

await connectDb();

//Middlewares
app.use(cors())
app.use(express.json())

//ROUTES
app.get("/",(req,res)=>{
res.send("API is working")
})

app.use("/api/admin",adminRouter)
app.use("/api/blog",blogRouter)

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`The server is runnin on ${PORT} number`)
})

export default app;


