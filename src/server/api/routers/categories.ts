import { z } from "zod";
import { Book } from "@prisma/client";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "pnpm/server/api/trpc";
import { resolve } from "path";

export const categorie = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const categories = await ctx.prisma.categorie.findMany();
    return categories;
  }),

  getLastFiveBooks: publicProcedure
    .input(
      z.object({
        categorieId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const categorieName = await ctx.prisma.categorie.findUnique({
        where: {
          id: input.categorieId,
        },
      });

      //get the last 5 books of the categorie
      const books = await ctx.prisma.book.findMany({
        where: {
          categories: {
            some: {
              id: input.categorieId,
            },
          },
        },
        take: 5,
        orderBy: {
          createdAt: "desc",
        },
      });
      //for each book, add the author and the categorie
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
            categorie: categorieName,
          };
        })
      );
      return newBooks;
    }),
});
