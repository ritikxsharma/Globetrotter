import axios from "axios";

const apiClient = axios.create({
  baseURL: `${window.location.origin}/api/` || "http://localhost:5000/api/",
});

export const getRandomQuestion = async () => {
  try {
    const response = await apiClient.get("/questions/random");
    console.log(response);

    return response;
  } catch (error) {
    console.log("Error fetching question: ", error);
    return null;
  }
};

export const registerUser = async (username, totalScore) => {
  try {
    const response = await apiClient.post("/users/register", {
      username,
      totalScore,
    });
    console.log(response);

    return response;
  } catch (error) {
    console.log("Error registering. Please try again later! ", error);
    throw error;
  }
};

export const getChallengerData = async (challenger) => {
  try {
    const response = await apiClient.get(`/users/getChallenger/${challenger}`);
    return response;
  } catch (error) {
    console.log("Error in fetching challenger score");
  }
};
