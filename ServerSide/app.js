const express = require("express")
const app = express();
const cors = require("cors")
require("./src/DB/server")

const UserRouter = require("./src/Routers/UserRouter")
const ProductRouter=require("./src/Routers/ProductRouters")

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.use('/user', UserRouter);
app.use('/product',ProductRouter);


app.listen(5000, ()=>{
    console.log("listening port 5000")
})