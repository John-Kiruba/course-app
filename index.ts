import bodyParser from "body-parser";
const express = require("express");

const adminRouter = require("./routes/admin");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const PORT = 3000;

app.use("/admin", adminRouter);

app.get("/", (req: Request, res: Response) => {
  return "Hello World";
});

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
