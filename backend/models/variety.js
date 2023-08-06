const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VarietydSchema = Schema({
  supplier:  { type: String, required: true },
  variety:   { type: String, required: true },
  sku:       { type: String, required: true },
  product:   { type: Schema.ObjectId, ref: "product", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("variety", VarietydSchema);
