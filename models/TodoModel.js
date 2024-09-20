const mongoose = require ("mongoose");
const taskSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"вы не ввели название задачи"],
        },
        descr:{
            type:String,
            required:false,
        },
    },
    {
        timestamps:true,
    }
);
const ToDo=mongoose.model("task",taskSchema);
module.exports=ToDo;