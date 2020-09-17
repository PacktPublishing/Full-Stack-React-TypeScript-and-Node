import { IResolvers } from "apollo-server-express";
import { QueryOneResult } from "../repo/QueryArrayResult";
import { Thread } from "../repo/Thread";
import { getThreadById } from "../repo/ThreadRepo";
import { User } from "../repo/User";
import { register, UserResult } from "../repo/UserRepo";
import { GqlContext } from "./GqlContext";

interface EntityError {
  message: string;
}
const resolvers: IResolvers = {
  ThreadResult: {
    __resolveType(obj: any, context: GqlContext, info: any) {
      if (obj.message) {
        return "EntityError";
      }
      console.log("obj", obj);
      return "Thread";
    },
  },
  Query: {
    getThreadById: async (
      obj: any,
      args: { id: string },
      ctx: GqlContext,
      info: any
    ): Promise<Thread | EntityError | undefined> => {
      let thread: QueryOneResult<Thread>;
      try {
        thread = await getThreadById(args.id);
        console.log("id", thread?.entity?.id);
        if (thread.entity) {
          return thread.entity;
        }
        return {
          message: thread.messages
            ? thread.messages[0]
            : "An error has occurred",
        };
      } catch (ex) {
        throw ex;
      }
    },
  },
  Mutation: {
    register: async (
      obj: any,
      args: { email: string; userName: string; password: string },
      ctx: GqlContext,
      info: any
    ): Promise<User | undefined> => {
      let user: UserResult;
      try {
        user = await register(args.email, args.userName, args.password);
        if (user && user.user) {
          return user.user;
        }
      } catch (ex) {}
      return undefined;
    },
  },
};

export default resolvers;
