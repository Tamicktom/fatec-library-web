import { z } from "zod";
import { Book } from "@prisma/client";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "pnpm/server/api/trpc";
import { resolve } from "path";

export const books = createTRPCRouter({
  mainBannerList: publicProcedure.query(async ({ ctx }) => {
    const books = await ctx.prisma.book.findMany({
      //search books published in the last 7 days, bring the first 5
      where: {
        createdAt: {
          gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        },
      },
    });
    //for each book, add the author
    const newBooks = await Promise.all(
      books.map(async (book) => {
        const author = await ctx.prisma.author.findUnique({
          where: {
            id: book.authorsId,
          },
        });
        return {
          ...book,
          author,
        };
      })
    );
    return newBooks;
  }),

  //list book with pagination

  listBooks: publicProcedure
    .input(
      z.object({
        skip: z.number().min(0).default(0),
        take: z.number().min(1).max(50).default(10),
        text: z.string().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const { skip, take } = input;
      const books = await ctx.prisma.book.findMany({
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
        where: {
          OR: [
            {
              title: {
                contains: input.text,
              },
            },
            {
              description: {
                contains: input.text,
              },
            },
          ],
        },
      });

      const booksWithAuthors = await Promise.all(
        books.map(async (book) => {
          const author = await ctx.prisma.author.findUnique({
            where: {
              id: book.authorsId,
            },
          });
          return {
            ...book,
            author,
          };
        })
      );

      const bookWithAuthorsAndPublisher = await Promise.all(
        booksWithAuthors.map(async (book) => {
          const publisher = await ctx.prisma.publisher.findUnique({
            where: {
              id: book.publishersId,
            },
          });
          return {
            ...book,
            publisher,
          };
        })
      );

      return {
        book: bookWithAuthorsAndPublisher,
        total: await ctx.prisma.book.count(),
      };
    }),
});
