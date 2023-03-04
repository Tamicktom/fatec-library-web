"use client";
//* Libraries imports
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//* Components imports
import ReleasingBookCard from "./components/ReleasingBookCard";

//* Types imports
import type { Book } from "@/@types/Book";

//* Utils imports
import { getBooks } from "./utils";


export default function ReleasingBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 32,
    }
  });

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div
      className="flex flex-row items-start justify-start w-full gap-8 pl-8 overflow-hidden"
    >
      <div
        ref={sliderRef}
        className="keen-slider"
      >
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
    </div>
  );
}