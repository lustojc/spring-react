const { Schema, model, ObjectId } = require("mongoose");

const cardScheme = new Schema({
  headline: String,
  description: String,
  img: String,
  ids: Number,
});

module.exports = model("cards", cardScheme);
