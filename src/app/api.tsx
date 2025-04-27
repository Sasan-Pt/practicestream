import axios from "axios"

export const getImagesSlider = async () => {
    try {
        const response = await axios.get("http://localhost:8080/images");
        console.log(response, 'response');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error so React Query can handle it
    }
}