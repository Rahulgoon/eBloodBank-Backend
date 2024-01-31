const { Schema, model} = require("mongoose");

const contactSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true});
const Contact = model ('contact' ,contactSchema);
module.exports = Contact;