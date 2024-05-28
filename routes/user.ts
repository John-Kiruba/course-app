import { Router, Request, Response } from "express";
import { JWT_SECRET as jwt_secret } from "../index";

const jwt = require("jsonwebtoken");

const userMiddleware = require("../middleware/user");

const { User } = require("../db/index");

const router = Router();

export interface AuthData extends Express.Request {
  username?: string;
  params: {
    courseId?: string;
  };
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

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  const isValidated = await User.findOne({
    name: username,
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

//usercourses puchase logic
router.post(
  "/courses/:courseId",
  userMiddleware,
  async (req: AuthData, res: Response) => {
    const username = req.username;

    const courseId = req.params.courseId;

    try {
      const updatePurchase = await User.updateOne(
        { name: username },
        {
          $addToSet: {
            purchasedCourses: courseId,
          },
        }
      );

      if (updatePurchase.nModified > 0) {
        res.status(200).send("Course Purchased Successfully");
      } else {
        res.status(500).send("Error Purchasing Course");
      }
    } catch (e) {
      res.status(500).send(`error: ${e}`);
    }
  }
);

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
