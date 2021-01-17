const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const auth = require("../middleware/auth");

const userCtrl = require("../controllers/user");

// Need to be tested as a middleware
// Can be use with Rate Limit Mongo to store data
// Limit number of request for login route
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
//

// Limit number of request for signup route
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 50, // start blocking after 5 requests
  message:
    "Too many accounts created from this IP, please try again after an hour",
});
//
//

router.post("/signup", createAccountLimiter, userCtrl.signup);
router.post("/login", apiLimiter, userCtrl.login);
router.post("/logout", userCtrl.logout);

router.get("/account/:id", auth, userCtrl.getUserProfile);
router.put("/account/:id", auth, userCtrl.updateUserProfile);
router.delete("/account/:id", auth, userCtrl.deleteUserProfile);

module.exports = router;
