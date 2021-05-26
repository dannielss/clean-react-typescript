import React, { useEffect, useState } from "react";
import { UserRepositories } from "../../../domain/usecases/user-repositories";
import { Repositories } from "../../../domain/models/repositories";

type Props = {
  userRepositories: UserRepositories;
};

const ListRepositories = ({ userRepositories }: Props) => {
  const [repos, setRepos] = useState<Repositories[]>([]);

  useEffect(() => {
    (async function getRepositories() {
      const response = await userRepositories.get("Daniels887");

      setRepos(response);
    })();
  }, []);

  return (
    <div>
      {repos.map((repo) => (
        <h1 key={repo.id}>{repo.full_name}</h1>
      ))}
    </div>
  );
};

export default ListRepositories;
