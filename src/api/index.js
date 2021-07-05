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

export async function getUserCart(username) {
  console.log("SRC API CALL - getUserCart/ID", username);
  try {
    const { data } = await axios.get(`/api/${username}/cart`, username);
    console.log("SRC API CALL - getUserCart/Data", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addToUserCart(body) {
  console.log("SRC API CALL - addToUserCart/Body", body);
  try {
    const { data } = await axios.post("/api/user/cart", body);
    console.log("SRC API CALL - addToUserCart/Data", data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
