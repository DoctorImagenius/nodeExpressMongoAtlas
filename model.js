import mongoose from "mongoose";
let UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 18 },
    password: { type: String, required: true },
});
export let Users = mongoose.model("Users", UserSchema);
