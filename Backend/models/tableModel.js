const mongoose=require('mongoose');

const tableSchema=mongoose.Schema({
    user:{
        type:String,
        required:[true,"user must be defined"],
    },
    userName:{
        type:String,
        required:[true,"user must be defined"],
    },
    email:{
        type:String,
        required:[true,"user must be defined"],
        unique:true
    },
    role:{
        type:String,
        required:[true,"user must be defined"]
    },
    status:{
        type:String,
        required:[true,"user must be defined"]
    },
    plan:{
        type:String,
        required:[true,"user must be defined"]
    },
})

const table=mongoose.model('tableData',tableSchema,)

module.exports=table