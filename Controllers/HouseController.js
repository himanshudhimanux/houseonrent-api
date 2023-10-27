const asyncHandler = require('express-async-handler');
const House = require('../Models/HouseModel');


// Get Houses
const getHouse = asyncHandler(async (req, res) => {
   let data = await House.find();
   console.log(data);
   res.send(data);
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
const updateHouse = asyncHandler( async(req,res) =>{
    let data = await House.updateOne(
      req.params, { $set: req.body }
    );
    res.send(data);
})

// Delete House
const deleteHouse = asyncHandler( async (req , res) => {
    let data = await House.deleteOne(req.params);
    res.send(data);
})


module.exports={CreateHouse, getHouse, updateHouse, deleteHouse};