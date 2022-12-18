const express=require('express');
const tableRouter=require('./Routes/tableRouter')
const userRouter=require('./Routes/userRouter')
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

// app.use((req,resp,next)=>{
//     console.log(req.headers);
//     next();
// })

app.use('/api/v1/tableData',tableRouter);
app.use('/api/v1/userData',userRouter);

module.exports=app;