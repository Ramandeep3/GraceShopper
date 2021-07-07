const express = require("express");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const { addToCart, getCartByUsername } = require("../db");
const { requireUser } = require("./required");

cartRouter.get("/me", requireUser, async (res, req, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

cartRouter.get("/:username/cart", requireUser, async (req, res, next) => {
  const { username } = req.params;
  console.log("API CART ROUTER", username);
  const userCart = await getCartByUsername(username);
  console.log("API CALL - User Cart:", userCart);
  return userCart;
});

cartRouter.post("/user/cart", requireUser, async (req, res, next) => {
  const { username, productId, price, quantity, plantUrl } = req.body;
  const userCart = await addToCart({
    username,
    productId,
    price,
    quantity,
    plantUrl,
  });
  console.log("API CALL - Add To User Cart:", userCart);
});

module.exports = cartRouter;
