"use client";

//* Libraries imports
import { useEffect, useState } from "react";

//* Components imports
import Category from "./Components/Category";

//* Types imports
import type { Categorie } from "@/@types/Book";

async function getCategories() {
  const response = await fetch("/api/mainPageCategories");
  const data: Categorie[] = await response.json();
  return data;
}

export default function BookCategories() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-8 transition-all">
      {
        categories.length > 0
          ? categories.map((categorie, index) => {
            return <Category key={index} {...categorie} />
          })
          : <div className="h-60" />
      }
    </div>
  );
}