const { client } = require("./client");
const { getUserByUsername } = require("./users");

async function createUserCart(userId, productId, price, quantity, plantUrl) {
  console.log("Inside createUserCart before try/catch");

  try {
    const { rows: cart } = await client.query(
      `
            INSERT INTO cart ("userId", "productId", price, quantity, "plantUrl")
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
            `,
      [userId, productId, price, quantity, plantUrl]
    );

    console.log("create Cart return as Cart", cart);

    return cart;
  } catch (error) {
    throw error;
  }
}

async function addToCart(username, productId, price, quantity, plantUrl) {
  const user = await getUserByUsername(username);
  console.log("Inside addToCart - Just the User from getUserByUsername", user);

  const userId = user.id;

  const cart = await getCartByUserId(userId);

  console.log("Inside addToCart - user.ID from getUserByUsername", userId);

  if (!cart) {
    console.log("Inside addToCart if/esle [IF]");
    await createUserCart(userId, productId, price, quantity, plantUrl);
  } else {
    console.log("Inside addToCart if/esle [ELSE]");

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

    console.log("MY Cart", rows);
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
};
