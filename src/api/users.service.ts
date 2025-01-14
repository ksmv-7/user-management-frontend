import { BACKEND_URL } from "../consts";
import { User } from "../types/user/types";

export const fetchUsers = async ({ pageParam = 1, limit = 3 }) => {
  const response = await fetch(`${BACKEND_URL}/users?page=${pageParam}&limit=${limit}`);
  const data = await response.json();
  return {
    users: data.userData as User[],
    nextPage: data.nextPage as number,
  };
};
