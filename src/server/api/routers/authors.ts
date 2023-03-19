import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "pnpm/server/api/trpc";

export const authors = createTRPCRouter({
  getPopularAuthors: publicProcedure.query(async ({ ctx }) => {
    const authors = await ctx.prisma.author.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });
    //for each author, count the number of books
    const newAuthors = await Promise.all(
      authors.map(async (author) => {
        const books = await ctx.prisma.book.findMany({
          where: {
            authorsId: author.id,
          },
        });
        return {
          ...author,
          booksCount: books.length,
        };
      })
    );
    return newAuthors;
  }),
});
