const {bollywood,hollywood,food,fitness,technology}=require("../Controller/data")
const register=require("../Controller/register")
const express=require('express')
const route1=express.Router();
// route.post("/api/v1/login",login)
route1.post("/register",register)
route1.get("/bollywood",bollywood)
route1.get("/hollywood",hollywood)
route1.get("/fitness",fitness)
route1.get("/food",food)
route1.get("/technology",technology)



module.exports=route1