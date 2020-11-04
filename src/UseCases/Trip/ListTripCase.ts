import { getRepository } from "typeorm";

import User from "../../entity/Trip";

interface Response {
  name: string;
}

class ListTripCase {
  public async execute(): Promise<Response> {
    const TripRepository = getRepository(User);

    const user: any = await TripRepository.find({ where: {} });

    return user;
  }
}

export default ListTripCase;
