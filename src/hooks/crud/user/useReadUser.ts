import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../api/users.service";

export const useListPaginatedUsers = () => {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam, limit: 3 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return {
    paginatedUsersData: data,
    isPaginatedUsersLoading: isLoading,
    isPaginatedUsersError: isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  }
};