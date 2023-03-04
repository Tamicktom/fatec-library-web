//* Type imports
import { Book } from "@/@types/Book";

export async function getBooks() {
  const response = await fetch("/api/releasingBooks");
  const data: Book[] = await response.json();
  console.log(data);
  return data;
}