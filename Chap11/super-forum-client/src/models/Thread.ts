import Category from "./Category";
import ThreadItem from "./ThreadItem";

export default interface Thread {
  id: string;
  views: number;
  flagPoints: number;
  title: string;
  body: string;
  userName: string;
  userId: string;
  points: number;
  createdOn: Date;
  lastModifiedOn: Date;
  threadItems: [ThreadItem];
  category: Category;
}
