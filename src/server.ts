import express, { json, Request, Response } from "express";

const app = express();
app.use(json());
const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
  res.json({ player: "Juan" });
});

app.listen(port, () => {
  console.log(`Server runnig at port http://localhost:${port}`);
});
