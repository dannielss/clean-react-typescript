import { UserRepositories } from "../../../domain/usecases/user-repositories";
import { Repositories } from "../../../domain/models/repositories";
import { HttpClient } from "../../protocols/http/http-client";

export class GithubGetRepositories implements UserRepositories {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<Repositories[]>
  ) {}

  async get(user: string): Promise<Repositories[]> {
    const httpReponse = await this.httpClient.request({
      url: `${this.url}/${user}/repos`,
      method: "get",
    });

    return httpReponse.body;
  }
}
