const express = require('express');
const cors = require('cors');
const connectDB = require("./config/Database");
require('dotenv').config();
const UserRoutes = require('./routes/UserRoutes');
const HouseRoutes = require('./routes/HouseRoutes')

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use(express.json());

// Add your routes here

app.get("/" ,(req,res) => {
    res.send("Hello House On Rent");
})

app.use("/api/user", UserRoutes);
app.use("/", HouseRoutes);


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
