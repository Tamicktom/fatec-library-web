//* Components imports
import Category from "./Components/Category";

import { api } from "pnpm/utils/api";

export default function BookCategories() {
  const categories = api.categorie.getAll.useQuery();

  return (
    <div className="flex flex-col items-start justify-start w-full gap-8 transition-all">
      {
        categories?.data && categories.data?.length > 0
          ? categories.data.map((categorie, index) => {
            return <Category
              key={index}
              categorieId={categorie.id}
              title={categorie.name}
            />
          })
          : <div className="h-60" />
      }
    </div>
  );
}