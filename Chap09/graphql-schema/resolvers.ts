import { IResolvers } from "apollo-server-express";
import { v4 } from "uuid";
import { GqlContext } from "./GqlContext";
import { todos } from "./db";

interface User {
  id: string;
  username: string;
  email?: string;
}

interface Todo {
  id: string;
  title: string;
  description?: string;
}

const NEW_TODO = "NEW TODO";

const resolvers: IResolvers = {
  Query: {
    getUser: async (
      parent: any,
      args: {
        id: string;
      },
      ctx: GqlContext,
      info: any
    ): Promise<User> => {
      return {
        id: v4(),
        username: "dave",
      };
    },
    getTodos: async (
      parent: any,
      args: null,
      ctx: GqlContext,
      info: any
    ): Promise<Array<Todo>> => {
      return [
        {
          id: v4(),
          title: "First todo",
          description: "First todo description",
        },
        {
          id: v4(),
          title: "Second todo",
          description: "Second todo description",
        },
        {
          id: v4(),
          title: "Third todo",
        },
      ];
    },
  },
  Mutation: {
    addTodo: async (
      parent: any,
      args: {
        title: string;
        description: string;
      },
      { pubsub }: GqlContext,
      info: any
    ): Promise<Todo> => {
      const newTodo = {
        id: v4(),
        title: args.title,
        description: args.description,
      };
      console.log("newTodo", newTodo);
      todos.push(newTodo);
      pubsub.publish(NEW_TODO, { newTodo });
      return todos[todos.length - 1];
    },
  },
  Subscription: {
    newTodo: {
      subscribe: (parent, args: null, { pubsub }: GqlContext) =>
        pubsub.asyncIterator(NEW_TODO),
    },
  },
};

export default resolvers;
