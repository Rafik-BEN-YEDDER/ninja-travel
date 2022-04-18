const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const voyageSchema = new Schema({
  depart: {
    type: String,
    required: true,
  },
  arrivee: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  heure: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  places: {
    type: Number,
    required: true,
  },
});

module.exports = Voyage = mongoose.model("/Voyage", voyageSchema);
