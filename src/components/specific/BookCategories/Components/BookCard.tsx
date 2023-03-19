//* Libraries imports
import Image from "next/image";

//* Components imports
import CategorySpan from "./CategorySpan";

type Props = {
  image: string;
  title: string;
  author: string;
  category: string[];
}

export default function BookCard(props: Props) {
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