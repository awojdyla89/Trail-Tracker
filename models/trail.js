const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    starRate: Number,
    comment: String,
    date: Date,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    raterName: String,
  },
  {
    timestamps: true,
  }
);

const trailSchema = new Schema(
  {
    trailLength: Number,
    trailName: String,
    location: String,
    usersTrail: { type: Schema.Types.ObjectId, ref: "User" },

    ratings: [ratingSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trail", trailSchema);
