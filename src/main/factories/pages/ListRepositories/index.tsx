import React from "react";
import { AxiosHttpClient } from "../../../../infra/http/axios-http-client";
import { GithubGetRepositories } from "../../../../data/usecases/user-repositories/github-get-repositories";
import ListRepositories from "../../../../presentation/pages/UserRepositories";

export const ListRepositoriesFactory = () => {
  const axiosHttpClient = new AxiosHttpClient();
  const githubGetRepositories = new GithubGetRepositories(
    "users",
    axiosHttpClient
  );

  return <ListRepositories userRepositories={githubGetRepositories} />;
};
