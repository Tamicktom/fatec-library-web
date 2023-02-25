//* Libraries imports

//* Components imports
import BookCard from "./BookCard";

//* Types imports
import type { Categorie } from "@/@types/Book";

export default function Category(props: Categorie) {
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