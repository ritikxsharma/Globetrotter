const express = require("express");
const { getRandomQuestion } = require("../controllers/questionController");
const router = express.Router();

/**
 * @route   GET /api/questions/random
 * @desc    Sends a random question
 * @access  Public
 */
router.route("/random").get(getRandomQuestion);

module.exports = router;
