import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://c611a66a-cb38-4c13-96d5-ec01e6110dd0.mock.pstmn.io",
  timeout: 10000,
});

export const fetchPhones = async () => {
  try {
    const response = await apiClient.get(`/phones`);
    console.log("Phones", response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch item"
    );
  }
};
