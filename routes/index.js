const router =  require("express").Router();
const authRoutes = require("./auth.route");
// const userRoutes = require("./routes/userRoutes");
const userRoutes = require("./userRoutes");
const brandRoutes = require("./brand.routes");

router.get("/api", async (req, res, next) => {
    
      res.json({ message: "MovieMate API is working..." });
 
  });
  
router.use("/api" , authRoutes);
   router.use('/api/users', userRoutes);
   router.use('/api/brand', brandRoutes);




module.exports =   router;