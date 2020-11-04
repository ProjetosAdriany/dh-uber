import { MysqlProvider } from "../../../repositories/implementations/MySqlClientProvider";
import { CreateUserCase } from "./CreateClientCase";
import { CreateUserController } from "./CreateClientController";

const mysqlProvider = new MysqlProvider();
const createUserCase = new CreateUserCase(mysqlProvider);
const createUserController = new CreateUserController(createUserCase);

export { createUserController };
