import Thread from "./Thread";

export default class User {
  constructor(
    public id: string,
    public email: string,
    public userName: string,
    public threads: Array<Thread>
  ) {}
}
