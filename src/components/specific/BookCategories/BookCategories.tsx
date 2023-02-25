"use client";

//* Libraries imports
import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

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

async function getCategories() {
  const response = await fetch("/api/mainPageCategories");
  const data: Categorie[] = await response.json();
  return data;
}

export default function BookCategories() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-8 transition-all">
      {
        categories.length > 0
          ? categories.map((categorie, index) => {
            return <Category key={index} {...categorie} />
          })
          : <div className="h-60" />
      }
    </div>
  );
}

function Category(props: Categorie) {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-2 transition-all">
      <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
      <div className="flex flex-row items-start justify-between w-full gap-8 transition-all">
        {
          props.fiveBooks.length > 0
            ? props.fiveBooks.map((book, index) => {
              return <BookCard key={index} {...book} />
            })
            : <div className="h-60" />
        }
      </div>
    </div>
  );
}

function BookCard(props: Book) {
  const cut = 32;
  //show only the first cut characters of the title
  const title = props.title.length > cut ? props.title.slice(0, cut) + "..." : props.title;
  //show only the first cut characters of the author
  const author = props.author.length > cut ? props.author.slice(0, cut) + "..." : props.author;

  return (
    <div className="flex flex-col items-start justify-start overflow-hidden w-44">
      <div className="h-64 overflow-hidden rounded-lg w-44">
        <Image
          className="object-cover w-full h-full"
          src={props.image}
          alt={props.title}
          width={180}
          height={256}
        />
      </div>
      <div className="flex flex-col w-full h-16 my-2 overflow-hidden">
        <span className="text-base font-bold text-gray-800">{title}</span>
        <span className="text-sm font-normal text-gray-700">{author}</span>
      </div>
      <div className="flex flex-row items-center justify-start gap-2">
        {
          //reder just the first 2 categories
          props.category.length > 0
            ? props.category.slice(0, 2).map((category, index) => {
              return <CategorySpan key={index}>{category}</CategorySpan>
            })
            : <div className="h-4" />
        }
      </div>
    </div>
  );
}

type CategoryProps = {
  children: ReactNode;
}

const CategorySpan = (props: CategoryProps) => {
  return (
    <span className="text-gray-700 font-normal px-1 py-[2px] bg-gray-200 rounded-lg">
      {props.children}
    </span>
  );
}