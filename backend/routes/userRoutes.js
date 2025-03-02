const express = require("express");
const {
  getChallenger,
  registerChallenger,
} = require("../controllers/userController.js");

const router = express.Router();

/**
 * @route   POST /api/users/register
 * @desc    Register a new user
 * @access  Public
 */
router.route("/register").post(registerChallenger);

/**
 * @route   GET /api/users/getChallenger/:username
 * @desc    Sends the challenger data
 * @access  Public
 */
router.route("/getChallenger/:username").get(getChallenger);

module.exports = router;
