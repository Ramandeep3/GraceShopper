const express = require("express");
const cartRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const { createUserCart, addToCart, getCartByUsername } = require("../db");
const { requireUser } = require("./required");

cartRouter.get("/me", requireUser, async (res, req, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = cartRouter;
