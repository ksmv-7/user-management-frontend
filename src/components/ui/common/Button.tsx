type LoadMoreButtonProps = {
  onClick: () => void;
  isFetchingNextPage: boolean,
  hasNextPage: boolean,
}
export const LoadMoreButton = ({ onClick, isFetchingNextPage, hasNextPage }: LoadMoreButtonProps) => {
  return (
    <button onClick={onClick} disabled={!hasNextPage || isFetchingNextPage}>
      {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more users'}
    </button>
  );
};