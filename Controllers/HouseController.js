const asyncHandler = require('express-async-handler');
const House = require('../Models/HouseModel');


// Get Houses
const getHouse = asyncHandler(async (req, res) => {
    try {
        const data = await House.find();
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({ message: 'No houses found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
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

// Update House
const updateHouse = asyncHandler(async (req, res) => {
    try {
      const result = await House.updateOne(req.params, { $set: req.body });
  
      if (result.acknowledged) {
        res.status(200).json({ message: 'House updated successfully' });
      } else {
        res.status(404).json({ message: 'House not found or no changes made' });
      }
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

// Delete House
const deleteHouse = asyncHandler( async (req , res) => {

    try {
        const result = await House.deleteOne(req.params);
        
        if (result.deletedCount > 0) {
          res.status(200).json({ message: 'House deleted successfully' });
        } else {
          res.status(404).json({ message: 'House not found or no deletion occurred' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

})


module.exports={CreateHouse, getHouse, updateHouse, deleteHouse};