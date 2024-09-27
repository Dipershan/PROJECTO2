require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
 const indexRouter = require("./routes/index");
 

 app.use(express.json())

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected successfully...");
  })
  .catch((e) => {
    console.log("Database Error", e);
  });

  
app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
  });


// app.get("/" , (req , res)=>{
//     res.json("Hello");
// })

 app.use("/", indexRouter);


