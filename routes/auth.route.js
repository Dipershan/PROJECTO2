const router = require('express').Router();
const authController =  require("../controllers/auth.controllers");
const { authMiddleware } = require('../middleware/authMiddleware');

router.post("/auth/register" ,  authController.register);
router.post("/auth/login" ,  authController.login);

//Private Routes
router.post("/auth/user" ,authMiddleware , authController.user);

module.exports = router;