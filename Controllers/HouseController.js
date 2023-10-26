const asyncHandler = require('express-async-handler');
const House = require('../Models/HouseModel');


// Get Houses
const getHouse = asyncHandler(async (req, res) => {
    try {
      // You should perform validation to ensure req.user._id is a valid ObjectId.
      // If not, return an appropriate error response.
  
      const houses = await House.find({ user: req.user._id });
  
      // Check if houses is an empty array (no houses found).
      if (houses.length === 0) {
        // Handle the case where no houses are found for the user.
        return res.status(404).json({ message: "No houses found for this user." });
      }
  
      res.json(houses);
    } catch (error) {
      // Ensure you have proper error handling.
      // You can log the error for debugging and return an error response to the client.
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

// Create House Function
const CreateHouse = asyncHandler(async (req, res) => {

    const {squareFeet, bhk, location, price, houseimg } = req.body;

    if (!squareFeet || !bhk || !location || !price || !houseimg) {
        res.status(400);
        throw new Error("Please Fill all the Fields");
    } else {
        
        const house = new House({
            user: req.user._id, squareFeet, bhk, location, price, houseimg
        });
        const CreateHouse = await house.save();
        res.status(201).json(CreateHouse);
    }

});




module.exports={CreateHouse, getHouse};