//* Libraries imports
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//* Components imports
import ReleasingBookCard from "./components/ReleasingBookCard";

//* Utils imports
import { api } from "pnpm/utils/api";


export default function ReleasingBooks() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 32,
    },
    // breakpoints: {
    //   "(min-width: 768px)": {
    //     slides: {
    //       perView: 3,
    //       spacing: 32,
    //     }
    //   },
    //   "(min-width: 1024px)": {
    //     slides: {
    //       perView: 4,
    //       spacing: 32,
    //     }
    //   },
    //   "(min-width: 2500px)": {
    //     slides: {
    //       perView: 5,
    //       spacing: 32,
    //     }
    //   }
    // }
  });

  const books = api.books.mainBannerList.useQuery();

  return (
    <div
      className="flex flex-row items-start justify-start w-full gap-8 pl-8 overflow-hidden carrousel-holder"
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
                return index < 10
                  ? <ReleasingBookCard
                    key={index}
                    bookCover={book.image}
                    title={book.title}
                    author={book.author?.name || ""}
                    price={book.price}
                  />
                  : null
              })
            }
            {/* empty space to be in the end */}
            <div
              className="keen-slider__slide w-[400px] min-w-[400px] max-w-[400px] h-60 relative flex flex-col justify-end items-center"
            />

          </div>
        </>
      }
    </div>
  );
}