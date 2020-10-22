import { QueryArrayResult } from "./QueryArrayResult";
import { ThreadCategory } from "./ThreadCategory";

export const getAllCategories = async (): Promise<
  QueryArrayResult<ThreadCategory>
> => {
  const categories = await ThreadCategory.find();

  return {
    entities: categories,
  };
};
