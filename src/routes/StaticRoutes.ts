import { Router, Request, Response } from "express";
import BuildPath from "../utils/BuildPath";

const roteador = Router();

roteador.get("/", async function (req: Request, res: Response) {
  res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

roteador.get("*", async function (req: Request, res: Response) {
  res.sendFile(`${BuildPath(__dirname)}/views/404.html`);
});

export default roteador;
