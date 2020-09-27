export default class CategoryThread {
  constructor(
    public threadId: string,
    public categoryId: string,
    public categoryName: string,
    public title: string,
    public titleCreatedOn: Date
  ) {}
}
