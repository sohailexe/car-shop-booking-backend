import { Schema, model } from "mongoose";

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  createdAt: { type: Date, default: Date.now },
});

const Shop = model("Shop", shopSchema);

export default Shop;
