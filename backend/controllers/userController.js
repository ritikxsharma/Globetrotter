const HTTP_STATUS = require("../constants/httpCodes");
const {
  NOT_FOUND_ERROR,
  BAD_REQUEST_ERROR,
} = require("../helpers/customErrors");
const User = require("../models/User");

/**
 * @route   POST /api/users/register
 * @desc    Register user
 * @access  Public
 */
const registerChallenger = async (req, res, next) => {
  try {
    const { username, totalScore } = req.body;

    // Check if username exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new BAD_REQUEST_ERROR("username already taken");
    }

    // Create a new user with default score
    const newUser = new User({ username, score: totalScore });
    await newUser.save();

    res
      .status(HTTP_STATUS.CREATED)
      .json({ message: "User registered", username });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/users/getChallenger/:username"
 * @desc    Sends the challenger data using username
 * @access  Public
 */

const getChallenger = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      throw new NOT_FOUND_ERROR("challenger not found");
    }
    res
      .status(HTTP_STATUS.OK)
      .json({ username: user.username, score: user.score });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerChallenger,
  getChallenger,
};
