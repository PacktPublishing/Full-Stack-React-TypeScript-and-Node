import Category from "./Category";
import ThreadItem from "./ThreadItem";
import User from "./User";

export default class Thread {
  constructor(
    public id: string,
    public views: number,
    public title: string,
    public body: string,
    public user: User,
    public points: number,
    public createdOn: Date,
    public lastModifiedOn: Date,
    public threadItems: Array<ThreadItem>,
    public category: Category
  ) {}
}
