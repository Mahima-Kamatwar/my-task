import mongoose from "mongoose";

const TechSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  duration: { type: String, required: true },
  difficulty: { type: String, required: true },
  scope: { type: [String], required: true }
})

 let TechModel = mongoose.model("Tech", TechSchema)
 export{TechSchema}
