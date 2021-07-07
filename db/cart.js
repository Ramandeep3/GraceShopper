

const { client } = require("./client");
const { getUserByUsername } = require("./users");

async function createUserCart(userId, productId, price, quantity, plantUrl) {
  try {
    const { rows: cart } = await client.query(
      `
            INSERT INTO cart ("userId", "productId", price, quantity, "plantUrl")
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
            `,
      [userId, productId, price, quantity, plantUrl]
    );

    return cart;
  } catch (error) {
    throw error;
  }
}

async function addToCart(username, productId, price, quantity, plantUrl) {
  const user = await getUserByUsername(username);

  const userId = user.id;

  const cart = await getCartByUserId(userId);

  if (!cart) {
    await createUserCart(userId, productId, price, quantity, plantUrl);
  } else {
    try {
      const {
        rows: [orders],
      } = await client.query(
        `
        INSERT INTO cart ("userId", "productId", price, quantity, "plantUrl")
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
          `,
        [userId, productId, price, quantity, plantUrl]
      );
      console.log("Inside addToCart/orders", orders);

      return orders;
    } catch (error) {
      throw error;
    }
  }
}

async function getCartByUserId(userId) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM cart
    WHERE "userId"=$1;`,
      [userId]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getCartByUsername(username) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM cart
    WHERE "userId"=$1;`,
      [username]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteFromCart(userId, productId) {
  console.log("Inside Delete From Cart");
  try {
    await client.query(
      `
      DELETE FROM cart
      WHERE "userId"=$1 and "productId"=$2;
    `,
      [userId, productId]
    );
  } catch (error) {
    throw error;
  }
}

async function updateItemQuantity(newCount, productId, userId) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
      UPDATE cart
      SET quantity=$1
      WHERE "productId"=$2 and "userId"=$3
      RETURNING *;
    `,
      [newCount, productId, userId]
    );
    return cart;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUserCart,
  addToCart,
  getCartByUserId,
  deleteFromCart,
  updateItemQuantity,
  getCartByUsername,
};
