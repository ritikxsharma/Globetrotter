import axios from "axios";

const apiClient = axios.create({
   baseURL: `${window.location.origin}/api/`
});

export const getRandomQuestion = async () => {
  try {
    const response = await apiClient.get("/questions/random");
    return response;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (username, totalScore) => {
  try {
    const response = await apiClient.post("/users/register", {
      username,
      totalScore,
    });
    return response;
  } catch (error) {
    console.log("Error registering. Please try again later! ");
    throw error;
  }
};

export const getChallengerData = async (challenger) => {
  try {
    const response = await apiClient.get(`/users/getChallenger/${challenger}`);
    return response;
  } catch (error) {
    return error;
  }
};
