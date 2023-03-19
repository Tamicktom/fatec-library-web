//* Components imports
import BookCard from "./BookCard";

import { api } from "pnpm/utils/api";

type Props = {
  categorieId: string;
  title: string;
}

export default function Category(props: Props) {
  const fiveBooks = api.categorie.getLastFiveBooks.useQuery({ categorieId: props.categorieId });

  return (
    <div className="flex flex-col items-start justify-start w-full gap-2 transition-all">
      <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
      <div className="flex flex-row items-start justify-between w-full gap-8 transition-all">
        {
          fiveBooks && fiveBooks.data && fiveBooks.data.length > 0
            ? fiveBooks.data.map((book, index) => {
              return <BookCard
                key={index}
                image={book.image}
                title={book.title}
                author={book.author?.name || ""}
                category={book.categorie?.name?.split(",") || []}
              />
            })
            : <div className="h-60" />
        }
      </div>
    </div>
  );
}