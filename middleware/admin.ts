import { Request, Response, NextFunction } from "express";
const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
import { JWT_SECRET as jwt_secret } from "../index";

export interface AuthHeaders extends Express.Request {
  headers: {
    authorization?: string;
  };
}

async function adminMiddleware(
  req: AuthHeaders,
  res: Response,
  next: NextFunction
) {
  //implement JWT Authorization
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).send(" Unauthorized: No token Provided ");
  }

  const [bearer, token] = authorizationHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).send("Unauthorized: Invalid token format");
  }

  const decodedValue = jwt.verify(token, jwt_secret);

  if (decodedValue.username) {
    next();
  } else {
    return res.status(403).json({
      message: "You are not authenticated",
    });
  }
}

module.exports = adminMiddleware;
