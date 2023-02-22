
//* Components imports
import BookCategories from "@/components/specific/BookCategories/BookCategories";
import PopularAuthors from "@/components/specific/PopularAuthors/PopularAuthors";
import ReleasingBooks from "@/components/specific/ReleasingBooks/ReleasingBooks";

export default function MainPage() {
  return (
    <div className="flex flex-col w-full gap-24 py-8">
      <ReleasingBooks />

      <div className="flex flex-row w-full gap-8 pl-8">
        {/* left side */}
        <div className="flex flex-col items-start justify-start w-full">
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