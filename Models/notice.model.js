const {Schema ,model} = require("mongoose");

const noticeSchema = new Schema({
    date:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true});
const Notice = model ('notice',noticeSchema);
module.exports = Notice