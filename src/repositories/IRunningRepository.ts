import { Running } from "../entity/Running";

export default interface IRunningRepository {
  findAll(): Promise<Running[]>;
  save(running: Running): Promise<Running>;
  edit(id: number, running: Running): Promise<Running>;
}
