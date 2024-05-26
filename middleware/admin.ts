import { Request, Response, NextFunction } from "express";
const { Admin } = require("../db/index");

interface AuthHeaders extends Express.Request {
  headers: {
    username?: string;
    password?: string;
  };
}

async function adminMiddleware(
  req: AuthHeaders,
  res: Response,
  next: NextFunction
) {
  const username = req.headers.username;
  const password = req.headers.password;

  const dbInstance = await Admin.findOne({
    username,
    password,
  });

  if (dbInstance !== null) {
    console.log("user exists");
    next();
  } else {
    res.status(403).send("Permission denied");
  }
}

module.exports = adminMiddleware;