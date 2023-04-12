import { Request, Response, NextFunction } from "express";

const isAutheticated = true;
const isManager = false;

function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  if (isAutheticated) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
}

function ManagerMiddleware(req: Request, res: Response, next: NextFunction) {
  if (isManager) {
    next();
  } else {
    res.status(405).json({ message: "Not Allowed" });
  }
}

export { AuthMiddleware, ManagerMiddleware };
