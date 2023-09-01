import userModel from "../models/userModel.js";


export const getAllUser = async (req,res)=>{
    const users = await userModel.find({});

   //  console.log(req.query)
    res.send({
       success : true,
       users,
    })
}

export const getUserById = async (req,res)=>{

    const {id} = req.params;
 
    const users = await userModel.findById(id);
 
   //  console.log(req.query)
    res.send({
       success : true,
       users,
    })
 }
export const updateUser = async (req,res)=>{

    const {id} = req.params;
 
    const users = await userModel.findById(id);
 
   //  console.log(req.query)
    res.send({
       success : true,
       msg : "user updated",
       users,
    })
 }
export const deleteUser = async (req,res)=>{

    const {id} = req.params;
 
    // const users = await userModel.findById(id);
 
   //  console.log(req.query)
    res.send({
       success : true,
       msg : "user deleted",
    })
 }


 export const registerNewUser = async (req,res)=>{
    
    const {name,email,password} = req.body;

    const user = await userModel.create({name,email,password});
    res.status(201).send({
       success : true,
       msg : "user registered successfully",
       user,
    })
}