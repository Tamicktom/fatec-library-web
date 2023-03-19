// hooks/useListBooks.ts
import { useEffect } from "react";
import { api } from "pnpm/utils/api";

type Props = {
  skip: number;
  take: number;
  text: string;
  setTotal: (total: number) => void;
};

export function useListBooks(props: Props) {
  const query = api.books.listBooks.useQuery({
    skip: props.skip,
    take: props.take,
    text: props.text,
  });

  useEffect(() => {
    props.setTotal(query.data?.total || 0);
  }, [query.data?.total]);

  return {
    books: query.data?.book,
    total: query.data?.total,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
}
