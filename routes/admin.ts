import { Router, Request, Response } from "express";

const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  console.log("res from admin router");
  res.send("hello from admin get");
});

router.post("/signup", adminMiddleware, async (req: Request, res: Response) => {
  // console.log(req.body);
  const { username, password, age, email, country } = req.body; // Destructure the request body

  await Admin.create({
    username: username,
    password: password,
    age: age,
    email: email,
    country: country,
  });

  res.json({
    message: "Admin Created",
  });
});

module.exports = router;
