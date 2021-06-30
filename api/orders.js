const express = require("express");
const ordersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

const { createUserCart, addToCart } = require("../db");

module.exports = ordersRouter;
