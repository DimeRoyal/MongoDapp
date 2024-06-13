import { Request, Response, NextFunction } from "express";

export default function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";

  res.status(status).send({ message });
}
