const asyncHandler = require('express-async-handler');
const User = require('../Models/UserModel');
const generateToken = require('../config/GenerateToken');

// Register User Function
const RegisteUser = asyncHandler (async (req, res) => {


    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error("Error Occured!")
    }
});

// Login Authentication Function
const LoginUser = asyncHandler(async (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400)
        throw new Error("Invaild Email or Password");
    }

});


module.exports={RegisteUser, LoginUser}