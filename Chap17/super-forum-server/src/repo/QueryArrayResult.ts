export class QueryArrayResult<T> {
  constructor(public messages?: Array<string>, public entities?: Array<T>) {}
}

export class QueryOneResult<T> {
  constructor(public messages?: Array<string>, public entity?: T) {}
}
