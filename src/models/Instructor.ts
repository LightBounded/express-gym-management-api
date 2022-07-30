import { model, Schema } from "mongoose";
import type Instructor from "../interfaces/Instructor";

const InstructorSchema = new Schema<Instructor>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  specialization: { type: String, required: true },
});

export default model("Instructor", InstructorSchema);
