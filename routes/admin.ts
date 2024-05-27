import { Router, Request, Response } from "express";
import { JWT_SECRET as jwt_secret } from "../index";

const jwt = require("jsonwebtoken");

const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  console.log("res from admin router");
  res.send("hello from admin get");
});

//signup route
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, password, age, email, country } = req.body; // Destructure the request body

    await Admin.create({
      username,
      password,
      age,
      email,
      country,
    });

    res.json({
      message: "Admin Created Successfully",
    });
  } catch (error) {
    console.error("Error creating data:", error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const isValidated = await Admin.findOne({
    username,
    password,
  });

  if (isValidated) {
    const token = jwt.sign(
      {
        username,
      },
      jwt_secret
    );

    res.json({ token });
  } else {
    res.status(411).json({
      message: "Incorrect Credentials",
    });
  }
});

//course creation route
router.post("/course", adminMiddleware, async (req: Request, res: Response) => {
  const { title, description, imageLink, price } = req.body;

  const createdCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: `${title}, created sucessfully with the ID: ${createdCourse._id}`,
  });
});

//get courses route
router.get("/courses", adminMiddleware, async (req: Request, res: Response) => {
  const response = await Course.find({});

  res.json({ response });
});

module.exports = router;
