import { User } from "../../../entity/Client";
import IRunningRepository from "../../../repositories/IRunningRepository";
import { RunningDTO } from "../RunningDTO/RunningDTO";

export class CreateRunningCase {
  constructor(private runningRepository: IRunningRepository) {}

  async execute(data: RunningDTO) {
    const running = new User(data);
    await this.runningRepository.save(running);
  }
}
