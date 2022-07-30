import { model, Schema } from "mongoose";
import type Client from "../interfaces/Client";

const ClientSchema = new Schema<Client>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
});

export default model("Client", ClientSchema);
