"use client";
//* Libraries imports
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//* Components imports
import ReleasingBookCard from "./components/ReleasingBookCard";

//* Utils imports
import { api } from "pnpm/utils/api";


export default function ReleasingBooks() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 32,
    },
  });

  const books = api.books.mainBannerList.useQuery();

  return (
    <div
      className="flex flex-row items-start justify-start w-full gap-8 pl-8 overflow-hidden"
    >
      {
        books && books.data && books.data.length > 0 &&
        <>
          <div
            ref={sliderRef}
            className="keen-slider"
          >
            {
              books.data.map((book, index) => {
                return (
                  <ReleasingBookCard
                    key={index}
                    bookCover={book.image}
                    title={book.title}
                    author={book.author?.name || ""}
                    price={book.price}
                  />
                );
              })
            }
          </div>
        </>
      }
    </div>
  );
}