const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const footballerSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    citizenship: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    foot: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Footballer', footballerSchema);
