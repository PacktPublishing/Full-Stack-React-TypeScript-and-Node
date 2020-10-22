import Category from "./Category";
import ThreadItem from "./ThreadItem";

export default class Thread {
  constructor(
    public id: string,
    public views: number,
    public title: string,
    public body: string,
    public userName: string,
    public userId: string,
    public points: number,
    public createdOn: Date,
    public lastModifiedOn: Date,
    public threadItems: Array<ThreadItem>,
    public category: Category
  ) {}
}
