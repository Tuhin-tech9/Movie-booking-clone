import mongoose from "mongoose";


const Userschema= new mongoose.Schema({
    _id:{type:String ,require:true},
     name:{type:String ,require:true},
      email:{type:String ,require:true},
     image:{type:String ,require:true},


})


const UseR= mongoose.model('User',Userschema)

export default UseR