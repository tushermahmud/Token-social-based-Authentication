const UserModel =require('../models/UserModel');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose")
const myProfile = async(req,res,next)=>{
    try {
       console.log(req.userId);

       const user = await UserModel.findOne({
         _id: req.userId,
       }).select("-password");
       if(user){
           return res.json(user)
       }
    } catch (error) {
              console.log(error.message);

       return res.status(500).json({
           error:"server error!"
       }) 
    }
}
const getUserById=async(req,res)=>{
    try {
      const user = await UserModel.findById({ _id: req.params.userId }).select(
        "-password"
      );
      if (user) {
        return res.json(user);
      }
    } catch (error) {
      return res.status(500).json({
        error: "server error!",
      });
    }
}
module.exports = {
  myProfile,
  getUserById,
};

