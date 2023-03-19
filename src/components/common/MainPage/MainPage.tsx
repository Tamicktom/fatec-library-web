"use client";
//* Components imports
import BookCategories from "../../specific/BookCategories/BookCategories";
import PopularAuthors from "../../specific/PopularAuthors/PopularAuthors";
import ReleasingBooks from "../../specific/ReleasingBooks/ReleasingBooks";

export default function MainPage() {
  return (

    <div className="flex flex-col w-full gap-24 py-8">
      <ReleasingBooks />

      <div className="flex flex-row w-5/6 gap-8">
        {/* left side */}
        <div className="flex flex-col items-start justify-start w-full pl-8">
          <BookCategories />
        </div>

        {/* right side */}
        <div className="flex flex-col items-start justify-start w-96">
          <PopularAuthors />
        </div>
      </div>
    </div>
  );
}