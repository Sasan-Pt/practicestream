import axios from "axios";

export const getImagesSlider = async () => {
  try {
    const response = await axios.get("http://localhost:8080/images");
    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetSchedule=async(startDate:string,endDate:string)=>{
  try {
    const response = await axios.get(`http://localhost:8080/schedule?startDate=${startDate}&endDate=${endDate}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const GetPersons = async () => {
  try {
    const response = await axios.get("http://localhost:8080/people");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deletePerson = async (index: number) => {
  try {
    const response = await axios.delete(
      "http://localhost:8080/people/" + index
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateData = async () => {
  const staticData = { id: "4", name: "shahab" };
  try {
    const response = await axios.post(
      "http://localhost:8080/people",
      staticData
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
