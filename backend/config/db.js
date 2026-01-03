import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aniket35mishra_db_user:invoice123@cluster0.qbrafbu.mongodb.net/InvoiceAI')
    .then(() => { console.log('DB CONNECTED')})
}