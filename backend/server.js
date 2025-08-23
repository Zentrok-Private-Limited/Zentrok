const express= require("express");
const cors= require("cors");
const mongoose= require("mongoose");
require ('dotenv').config();

const app=express();
const port=process.env.PORT||5000;

//middleware

app.use(cors());
app.use(express.json());

//connection 

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connection successful"))
.catch((err)=>console.log("connection error",err));

//routing 

const routes= require("./routes/contact");
app.use("/api/contact",routes);

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})