import { EntityRepository, Repository } from "typeorm";

import Trip from "../entity/Trip";

@EntityRepository(Trip)
class IlistTrip extends Repository<Trip> {
  public async findByStatus(status: string): Promise<Trip | null> {
    const findStatus: any = await this.find({ where: { status: "normal" } });

    return findStatus;
  }
}

export default IlistTrip;
