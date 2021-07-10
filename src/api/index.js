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
    } = await axios.post("/api/cart/user-cart", body);
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
export async function addItemToCart(plant_id, quantity, token) {
  try {
    const { data } = await axios.post(
      `api/cart`,
      { plant_id, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.error("Error adding to cart");
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

export async function getAllOrders() {
  const { data } = await axios.get("api/order/all");
  const orders = [];
  data.forEach((element, index) => {
    if (orders.some((order) => order.id === element.id)) {
      const orderIndx = orders.findIndex((e) => e.id === element.id);
      orders[orderIndx].products.push(element);
    } else {
      orders.push({
        id: element.id,
        status: element.status,
        products: [{ name: element.name, quantity: element
          .quantity }],
      });
    }
  });
  return orders;
}
export async function updateOrderStatus(order_id, status) {
  const updatedOrder = await axios.patch(`/api/order/${order_id}`, { status });
  return updatedOrder;
}
