// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Categorie = {
  title: string;
  fiveBooks: [Book, Book, Book, Book, Book];
};

type Book = {
  title: string;
  author: string;
  year: number;
  price: number;
  image: string;
  category: string[];
};



const booksCategories: Categorie[] = [
  {
    title: "Fantasia",
    fiveBooks: [
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
    ],
  },
  {
    title: "Aventura",
    fiveBooks: [
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
    ],
  },
  {
    title: "Mistério",
    fiveBooks: [
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
      {
        title: "Book Cover Design Formula",
        author:"Anita Nipane",
        year: 2019,
        price: 59.99,
        image: "/book1.jpg",
        category: ["Fantasy", "Adventure"],
      },
    ],
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Categorie[]>
) {
  res.status(200).json(booksCategories);
}
