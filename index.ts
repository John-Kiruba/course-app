import bodyParser from "body-parser";
const fs = require("fs");
const ini = require("ini");
const express = require("express");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const PORT = 3000;

app.use("/admin", adminRouter);
app.use("/user", userRouter);

//import JWT Secret
const jwt_secret_file = fs.readFileSync("config.ini", "utf-8");
const config = ini.parse(jwt_secret_file);
export const JWT_SECRET = config.credentials.JWT_SECRET;

app.get("/", (req: Request, res: Response) => {
  return "Hello World";
});

// app.get("/dummy", (req, res) => {});

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
