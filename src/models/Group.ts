import { model, Schema } from "mongoose";
import type Group from "../interfaces/Group";

const GroupSchema = new Schema<Group>({
  name: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  instructor: { type: String, required: true },
  clients: { type: [String], required: true },
});

export default model("Group", GroupSchema);
