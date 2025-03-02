const { error } = require("console");
const HTTP_STATUS = require("../constants/httpCodes");
const fs = require("fs");
const path = require("path");

// File path to the file storing all the questions
const filePath = path.join(__dirname, "../data/questions.json");

/**
 * @route   GET /api/questions/random
 * @desc    Sends a random question
 * @access  Public
 */
const getRandomQuestion = (req, res, next) => {
  try {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        throw new INTERNAL_SERVER_ERROR("Error fetching the question");
      }
      const questions = JSON.parse(data);
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];
      res.status(HTTP_STATUS.OK).json(randomQuestion);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRandomQuestion,
};
