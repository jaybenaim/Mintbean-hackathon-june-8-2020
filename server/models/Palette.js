const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaletteSchema = new Schema({
  hue: {
    type: String,
  },
  scheme: {
    type: String,
  },
  variation: {
    type: String,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = Palette = mongoose.model("Palette", PaletteSchema);
