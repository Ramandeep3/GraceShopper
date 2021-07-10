const express = require("express");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const { addToCart, getCartByUserId, getUserByUsername } = require("../db");
const { requireUser } = require("./required");

cartRouter.get("/me", requireUser, async (res, req, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

cartRouter.get("/:username", async (req, res, next) => {
  const { username } = req.params;
  const user = await getUserByUsername(username);
  const userId = user.id;
  const userCart = await getCartByUserId(userId);
  res.send(userCart);
});

cartRouter.post("/user-cart", async (req, res, next) => {
  const { username, id, price, quantity, imageURL } = req.body;
  const userCart = await addToCart(username, id, price, quantity, imageURL);
  res.send(userCart);
});

module.exports = cartRouter;
