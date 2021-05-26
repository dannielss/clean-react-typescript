import { Repositories } from "../models/repositories";

export interface UserRepositories {
  get(user: string): Promise<Repositories[]>;
}
