import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../api/users.service";

export const useListPaginatedUsers = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam, limit: 3 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return {
    paginatedUsersData: data,
    isListUsersLoading: isLoading,
    isListUsersError: isError,
    listUsersError: error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  }
};