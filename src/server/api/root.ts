import { createTRPCRouter } from "pnpm/server/api/trpc";
import { exampleRouter } from "pnpm/server/api/routers/example";
import { books } from "pnpm/server/api/routers/books";
import { authors } from "pnpm/server/api/routers/authors";
import {categorie  } from "pnpm/server/api/routers/categories";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  books: books,
  authors: authors,
  categorie: categorie,
});

// export type definition of API
export type AppRouter = typeof appRouter;
