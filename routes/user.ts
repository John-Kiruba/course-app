import { Router, Request, Response } from "express";

const userMiddleware = require("../middleware/user");
const { User } = require("../db/index");

const router = Router();

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
router.post(
  "/courses/:courseId",
  userMiddleware,
  async (req: Request, res: Response) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
      { name: username },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.json({
      message: "Purchase Completed",
    });
  }
);

//user

module.exports = router;
