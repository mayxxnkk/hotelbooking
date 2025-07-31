import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mynksingla:zqCWpk1ZYJzZeyMv@cluster0.1v87lqu.mongodb.net/hotelapp")

const Userschema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  
});

export const User = mongoose.model("User", Userschema);



