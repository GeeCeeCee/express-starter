import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server...");
});

router.get("/example", (req: Request, res: Response) => {
  res.send("This is an example route.");
});

export default router;
