import { Request, Response } from "express";
import { CreateRunningCase } from "./CreateRunningCase";

export class CreateRunningController {
  constructor(private createRunningCase: CreateRunningCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    const { origem, destino, status, id_cliente, id_motorista } = req.body;

    try {
      await this.createRunningCase.execute({
        origem,
        destino,
        status,
        id_cliente,
        id_motorista,
      });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({ details: err.message });
    }
  };
}
