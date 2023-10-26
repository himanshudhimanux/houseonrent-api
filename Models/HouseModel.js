const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  squareFeet: {
    type: Number,
    required: true,
  },
  bhk: {
    type: Number,
    enum: [1, 2, 3, 4, 5], // Ensure it's one of these values
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  houseimg:{
    type: String,
    default: "https://img.freepik.com/free-vector/image-upload-concept-landing-page_23-2148310293.jpg?w=900&t=st=1698255126~exp=1698255726~hmac=ff17831cbe597db7432a37a542e1b5287fc4d3b0ec51756c5d9ed634d35f30bb"
  },

},

{
    timestamps: true
}

);

const House = mongoose.model('House', houseSchema);

module.exports = House;
