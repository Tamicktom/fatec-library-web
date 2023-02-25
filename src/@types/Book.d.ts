export type Categorie = {
  title: string;
  fiveBooks: [Book, Book, Book, Book, Book];
};

export type Book = {
  title: string;
  author: string;
  year: number;
  price: number;
  image: string;
  category: string[];
};