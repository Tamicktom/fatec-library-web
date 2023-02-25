//* Libraries imports
import { type ReactNode } from "react";

type CategoryProps = {
  children: ReactNode;
}

const CategorySpan = (props: CategoryProps) => {
  return (
    <span className="text-gray-700 font-normal px-1 py-[2px] bg-gray-200 rounded-lg">
      {props.children}
    </span>
  );
}

export default CategorySpan;