const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["aviator", "fortune-totem"], // Add more categories if needed
    },
    name: {
      type: String,
      default: "", // Optional field
    },
    liveUrl: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true, // Stores the image filename
    },
  },
  { timestamps: true }
);

const Apimodel = mongoose.model("Api_Game", gameSchema);
module.exports = Apimodel;
