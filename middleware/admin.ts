import { Request, Response, NextFunction } from "express";
const { Admin } = require("../db/index");

async function adminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const username = req.body.username;
  const password = req.body.password;

  const dbInstance = await Admin.findOne({
    username: username,
    password: password,
  });

  if (dbInstance !== null) {
    console.log("user exists");
    res.status(409).send("User already exists");
  } else {
    console.log("user does not exists");
    next();
  }
}

module.exports = adminMiddleware;
