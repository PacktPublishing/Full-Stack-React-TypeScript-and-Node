import { Request, Response } from "express";
import { PubSub } from "apollo-server-express";

export interface GqlContext {
  req: Request;
  res: Response;
  pubsub: PubSub;
}
