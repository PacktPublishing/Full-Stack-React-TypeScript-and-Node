import { IResolvers } from "apollo-server-express";
import { QueryArrayResult, QueryOneResult } from "../repo/QueryArrayResult";
import { Thread } from "../repo/Thread";
import {
  createThread,
  getThreadById,
  getThreadsByCategoryId,
} from "../repo/ThreadRepo";
import { User } from "../repo/User";
import { register, UserResult } from "../repo/UserRepo";
import { GqlContext } from "./GqlContext";

interface EntityResult {
  messages: Array<string>;
}
const resolvers: IResolvers = {
  ThreadResult: {
    __resolveType(obj: any, context: GqlContext, info: any) {
      if (obj.messages) {
        console.log("EntityResult");
        return "EntityResult";
      }
      console.log("Thread");
      return "Thread";
    },
  },
  ThreadArrayResult: {
    __resolveType(obj: any, context: GqlContext, info: any) {
      if (obj.messages) {
        return "EntityResult";
      }
      return "ThreadArray";
    },
  },
  Query: {
    getThreadById: async (
      obj: any,
      args: { id: string },
      ctx: GqlContext,
      info: any
    ): Promise<Thread | EntityResult> => {
      let thread: QueryOneResult<Thread>;
      try {
        thread = await getThreadById(args.id);
        console.log("id", thread?.entity?.id);
        if (thread.entity) {
          return thread.entity;
        }
        return {
          messages: thread.messages
            ? thread.messages
            : ["An error has occurred"],
        };
      } catch (ex) {
        throw ex;
      }
    },
    getThreadsByCategoryId: async (
      obj: any,
      args: { categoryId: string },
      ctx: GqlContext,
      info: any
    ): Promise<{ threads: Array<Thread> } | EntityResult> => {
      let threads: QueryArrayResult<Thread>;
      try {
        threads = await getThreadsByCategoryId(args.categoryId);
        if (threads.entities) {
          return {
            threads: threads.entities,
          };
        }
        return {
          messages: threads.messages
            ? threads.messages
            : ["An error has occurred"],
        };
      } catch (ex) {
        throw ex;
      }
    },
  },
  Mutation: {
    createThread: async (
      obj: any,
      args: { userId: string; categoryId: string; title: string; body: string },
      ctx: GqlContext,
      info: any
    ): Promise<EntityResult> => {
      let result: QueryOneResult<Thread>;
      try {
        result = await createThread(
          args.userId,
          args.categoryId,
          args.title,
          args.body
        );
        return {
          messages: result.messages
            ? result.messages
            : ["An error has occurred"],
        };
      } catch (ex) {
        console.log(ex);
        throw ex;
      }
    },
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
