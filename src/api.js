import axios from 'axios';

const API_URL = "https://your-backend-url.com/api"; // Replace with your actual backend URL

export const fetchBudgetData = async () => {
    try {
        const response = await axios.get(`${API_URL}/budget`);
        return response.data;
    } catch (error) {
        console.error("Error fetching budget data:", error);
        return [];
    }
};
