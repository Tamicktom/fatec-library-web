// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Book } from "@/@types/Book";

const books: Book[] = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    price: 10,
    image: "/book1.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book2.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    year: 1977,
    price: 20,
    image: "/book3.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book4.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book5.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    price: 10,
    image: "/book1.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book2.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    year: 1977,
    price: 20,
    image: "/book3.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book4.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book5.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    price: 10,
    image: "/book1.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book2.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    year: 1977,
    price: 20,
    image: "/book3.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book4.jpg",
    category: ["Fantasy", "Adventure"],
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 15,
    image: "/book5.jpg",
    category: ["Fantasy", "Adventure"],
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  res.status(200).json(books);
}
