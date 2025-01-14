import React from "react";

type LoadMoreButtonProps = {
  onClick: () => void;
  isFetchingNextPage: boolean,
  hasNextPage: boolean,
}
const LoadMoreButton = ({ onClick, isFetchingNextPage, hasNextPage }: LoadMoreButtonProps) => {
  console.log('render')
  return (
    <button onClick={onClick} disabled={!hasNextPage || isFetchingNextPage}>
      {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more users'}
    </button>
  );
};

export const MemoizedLoadMoreButton = React.memo(LoadMoreButton);