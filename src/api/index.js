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

export async function registerUser(body) {
  try {
    const { data } = await axios.post("/api/users/register", body);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createProduct(name, description, price, image_url, type) {
  try {
    const { data } = await axios.post("/api/plants", {
      name,
      description,
      price,
      image_url,
      type,
    });
    alert("Plants successfully added");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPlantByName(name) {
  console.log("IN srcAPI", name);
  try {
    const { data } = await axios.get(`/api/plants/${name}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
