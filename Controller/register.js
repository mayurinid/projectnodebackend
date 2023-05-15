const arr=[]
const saltround=10;
const bcrypt=require("bcrypt")
const register=(req,res)=>{
const details=req.body;
const user=arr.find((item)=>{
    return details.email===item.email
})
if(user){
    return res.status(200).send({msg:"user alreay exits try to login"})
}
const hashpassword=bcrypt.hash(details.password,saltround)
console.log(saltround);
const obj={
    email:details.email,
    password:hashpassword
}

arr.push(obj)
console.log(arr);
res.send(arr)
}
module.exports=register