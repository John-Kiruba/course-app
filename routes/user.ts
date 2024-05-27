import { Router, Request, Response } from "express";
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index");

const router = Router();

export interface AuthData extends Express.Request {
  username?: string;
}

router.get("/", (_req: Request, res: Response) => {
  console.log("res from admin router");
  res.send("hello from admin get");
});

router.post("/signup", async (req: Request, res: Response) => {
  const { username, password, age, email, country } = req.body; // Destructure the request body

  await User.create({
    name: username,
    password: password,
    age: age,
    email: email,
    country: country,
  });

  res.json({
    message: "User Created",
  });
});

//usercourses puchase logic
router.post("/courses/:courseId", userMiddleware, async (req: AuthData) => {
  const username = req.username;
  console.log(username);
});

//user purchased courses fetch
router.get(
  "/purchasedCourses",
  userMiddleware,
  async (req: Request, res: Response) => {
    const username = req.headers.username;

    const purchasedCourseList = await User.findOne({
      name: username,
    });

    res.json({
      purchasedCourses: purchasedCourseList.purchasedCourses,
    });
  }
);

module.exports = router;
