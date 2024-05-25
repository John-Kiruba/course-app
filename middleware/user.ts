import { Request, Response, NextFunction } from "express";
const { User } = require("../db/index");

interface AuthHeaders extends Express.Request {
  headers: {
    username?: string;
    password?: string;
  };
}

async function userMiddleware(
  req: AuthHeaders,
  res: Response,
  next: NextFunction
) {
  const username = req.headers.username;
  const password = req.headers.password;

  console.log(req.headers);
  const dbInstance = await User.findOne({
    name: username,
    password,
  });
  console.log(dbInstance);

  if (dbInstance !== null) {
    console.log("user exists");
    next();
  } else {
    res.status(403).send("Permission denied");
  }
}

module.exports = userMiddleware;
