//* Libraries imports
import Head from "next/head";
import Image from "next/image";

//* Local imports
import { prisma } from "pnpm/server/db";
import type { Book, Author } from "@prisma/client";


import type { GetServerSideProps, GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { index } = context.query;

  if (!index) return { props: {} };
  if (typeof index !== "string") return { props: {} };

  const book = await prisma.book.findUnique({
    where: {
      id: index,
    },
    include: {
      author: true,
    }
  });

  if (!book) return { props: {} };

  return {
    props: {
      book: JSON.parse(JSON.stringify(book)),
    }, // will be passed to the page component as props
  }
}

type Props = {
  book: (Book & { author: Author })
}

export default function Book({ book }: Props) {

  return (
    <>
      <Head>
        <title>{book.title} - {book.author.name}</title>
      </Head>
      <div className="w-full bg-red-800">
        <nav className="w-full bg-green-800">
          <span>
            <a href="/">Home</a>
          </span>
        </nav>

        <main>
          <div>
            <h1>{book.title}</h1>
            <h2>{book.author.name}</h2>
            <p>{book.description}</p>
            <Image
              src={book.image}
              width={200}
              height={300}
              alt={book.title}
            />
          </div>
        </main>
      </div>
    </>
  )
}