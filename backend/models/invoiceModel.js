import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    qty:{
        type: Number,
        required: true,
        default:1
    },
    unitPrice:{
        type : Number,
        required:true, 
        default:0
    }
}, {
    _id:false
});

// the invoice schema

const invoiceSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: true,
        index:true
    },
    invoiceNumber:{
        type: String,
        required: true,
        index:true
    },
    issueDate:{
        type: String,
        required: true
    },
    dueDate:{
        type: String,
        default: ''
    },

    //Business info
    fromBusinessName: { type: String, default: "" },
    fromEmail: { type: String, default: "" },
    fromAddress: { type: String, default: "" },
    fromPhone: { type: String, default: "" },
    fromGst: { type: String, default: "" },

    // Client info
    client: {
      name: { type: String, default: "" },
      email: { type: String, default: "" },
      address: { type: String, default: "" },
      phone: { type: String, default: "" },
    },

    currency: { type: String, default: "INR" },
    status: { type: String, enum: ["draft", "unpaid", "paid", "overdue"], default: "draft" },


});

