const { client } = require("./client");
const { getUserByUsername } = require("./users");

async function createUserCart(userId, productId, price, quantity, imageURL) {
  console.log("Inside createUserCart before try/catch");

  try {
    const { rows: cart } = await client.query(
      `
            INSERT INTO cart ("userId", "productId", price, quantity, "imageURL")
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
            `,
      [userId, productId, price, quantity, imageURL]
    );

    // console.log("create Cart return as Rows", rows);
    console.log("create Cart return as Cart", cart);

    return cart;
  } catch (error) {
    throw error;
  }
}

async function addToCart(userId, productId, price, quantity, imageURL) {
  const cart = await getCartByUserId(userId);
  const user = await getUserByUsername(userId);
  console.log("Inside addToCart - Just the User from getUserByUsername", user);

  console.log("Inside addToCart - user.ID from getUserByUsername", userId);

  if (!cart) {
    console.log("Inside addToCart if/esle [IF]");
    await createUserCart(userId, productId, price, quantity, imageURL);
  } else {
    console.log("Inside addToCart if/esle [ELSE]");

    try {
      const {
        rows: [orders],
      } = await client.query(
        `
        INSERT INTO cart ("userId", "productId", price, quantity, "imageURL")
        VALUES($1, $2, $3, $4, $5)
        RETURNING *;
          `,
        [userId, productId, price, quantity, imageURL]
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
    const {
      rows: [cart],
    } = await client.query(
      `
    SELECT *
    FROM cart
    WHERE "userId"=$1;`,
      [userId]
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
  // deleteFromCart,
  // updateCart,
};
