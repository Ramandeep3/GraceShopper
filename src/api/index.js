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
  try {
    const { data } = await axios.get(`/api/cart/${username}`);
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
    const {
      data: [rows],
    } = await axios.post("/api/user/cart", body);
    console.log("SRC API CALL - addToUserCart/Data", rows);
    return rows;
  } catch (error) {
    console.log(error);
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

export async function getUserInfo() {
  try {
    const res = await axios.get("/api/users/me");
    console.log(res);
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
