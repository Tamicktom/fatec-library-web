"use client";

//* Libraries imports
import { useState, useEffect } from "react";
import Image from "next/image";

type Author = {
  name: string;
  image: string;
  books: number;
};

async function getPopularAuthors() {
  const response = await fetch("/api/popularAuthors");
  const data: Author[] = await response.json();
  return data;
}

export default function PopularAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    getPopularAuthors()
      .then((data) => {
        setAuthors(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-[400px] bg-gray-200/50 gap-2 p-8 rounded-l-2xl transition-all">
      <h1 className="text-3xl font-bold text-gray-800">Autores mais populares</h1>
      <div className="flex flex-col items-start justify-start gap-4 transition-all">
        {
          authors.map((author, index) => {
            return (
              <AuthorCard
                key={index}
                name={author.name}
                image={author.image}
                books={author.books}
              />
            );
          })
        }
      </div>
    </div>
  );
}

type AuthorCardProps = {
  name: string;
  image: string;
  books: number;
}

function AuthorCard(props: AuthorCardProps) {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <div className="flex items-center justify-center w-20 h-20 overflow-hidden rounded-full">
        <Image
          src={props.image}
          alt={props.name}
          width={80}
          height={80}
          className="w-full h-full"
          loading="lazy"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCA"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <span className="text-xl font-bold text-gray-900">{props.name}</span>
        <span className="text-base font-bold text-gray-700">
          {props.books > 1 ? `${props.books} livros` : `${props.books} livro`}
        </span>
      </div>
    </div>
  );
}