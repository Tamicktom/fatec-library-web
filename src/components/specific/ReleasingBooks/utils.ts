//* Type imports
import { api } from "pnpm/utils/api";

export async function getBooks() {
  const books = await api.books.mainBannerList.useQuery();
  return books;
}
