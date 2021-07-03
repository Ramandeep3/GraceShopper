import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api");
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllPlants() {
  try {
    const { data } = await axios.get("/api/plants");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(body) {
  try {
    const { data } = await axios.post("/api/users/login", body);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
