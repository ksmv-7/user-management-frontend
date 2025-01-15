import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchDebouncedUsers, fetchPaginatedUsers, fetchUser } from "../../../api/users.service";
import { useParams } from "react-router-dom";


  export const useReadUser = (userId?: string) => {
    const { id } = useParams();
    const definedUserId = userId || id;
    const {
      data,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ['users', userId],
      queryFn: () => fetchUser(definedUserId),
      enabled: !userId,
    });

    return {
      user: data,
      isUserLoading: isLoading,
      isUserError: isError,
    }
  };

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
    queryKey: ['users', 'paginated'],
    queryFn: ({ pageParam = 1 }) => fetchPaginatedUsers({ pageParam, limit: 3 }),
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

export const useListDebouncedUsers = (query: string) => {
  const {
    data,
    isFetching,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users', 'by-filter'],
    queryFn: () => fetchDebouncedUsers(query),
    enabled: query?.length >= 3,
  });

  return {
    debouncedUsersData: data,
    isDebouncedUsersLoading: isLoading,
    isDebouncedUsersError: isError,
    isFetching,
  }
};