"use client";
//* Libraries imports
import { useEffect, useState } from "react";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  year: number;
  price: number;
  image: string;
  category: string[];
};

export default function ReleasingBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="flex flex-row items-start justify-start w-full gap-8 pl-8 overflow-hidden transition-all">
      {
        books.length > 0
          ? books.map((book, index) => {
            return (
              <ReleasingBookCard
                key={index}
                bookCover={book.image}
                title={book.title}
                author={book.author}
                price={book.price}
              />
            );
          })
          : <div className="h-60" />
      }
    </div>
  );
}

async function getBooks() {
  const response = await fetch("/api/releasingBooks");
  const data: Book[] = await response.json();
  console.log(data);
  return data;
}

type ReleasingBookCardProps = {
  bookCover: string;
  title: string;
  author: string;
  price: number;
}

function ReleasingBookCard(props: ReleasingBookCardProps) {
  const price = props.price.toFixed(2).split(".");

  return (
    <div className="w-[400px] h-60 relative flex flex-col justify-end items-center">
      {/* last release */}
      <div className="relative flex flex-row justify-end w-full h-32 pt-1 pb-4 pr-2 overflow-hidden rounded-lg pl-44">
        {/* bg */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <Image
            src={props.bookCover}
            width={400}
            height={600}
            alt=""
            className="object-cover w-[110%] h-auto"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[50px]" />
        </div>

        {/* holder */}
        <div className="flex flex-col w-full h-full gap-4 z-[1] justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-100">{props.title}</span>
            <span className="text-xs font-normal text-gray-200">{props.author}</span>
          </div>

          <span className="text-2xl font-bold text-gray-100">R$ {price[0]}<span className="text-xl">,{price[1]}</span></span>
        </div>
      </div>

      {/* book cover */}
      <div className="w-[136px] h-[217px] absolute left-4 top-0 flex justify-center items-center overflow-hidden rounded-lg">
        <Image
          src={props.bookCover}
          width={136}
          height={217}
          alt="book cover"
          className="object-cover w-full h-full"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQC"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}