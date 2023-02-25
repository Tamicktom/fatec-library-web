// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Author } from "@/@types/Author";

const popularAuthors: Author[] = [
  {
    name: "J.R.R. Tolkien",
    image: "/author1.jpg",
    books: 3,
  },
  {
    name: "J.K. Rowling",
    image: "/author2.jpg",
    books: 7,
  },
  {
    name: "George R.R. Martin",
    image: "/author3.jpg",
    books: 5,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[]>
) {
  res.status(200).json(popularAuthors);
}
