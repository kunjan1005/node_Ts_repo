import { Schema,Model } from "mongoose";

const UserSchema=new Schema({
  name:{
      type:String,
      required:true
  },
  username:{
      type:String,
      required:true
  }
})