import {
  isThreadBodyValid,
  isThreadTitleValid,
} from "../common/validators/ThreadValidators";
import { QueryArrayResult, QueryOneResult } from "./QueryArrayResult";
import { Thread } from "./Thread";
import { ThreadCategory } from "./ThreadCategory";
import { ThreadItem } from "./ThreadItem";
import { User } from "./User";

export const createThread = async (
  userId: string | undefined | null,
  categoryId: string,
  title: string,
  body: string
): Promise<QueryOneResult<Thread>> => {
  const titleMsg = isThreadTitleValid(title);
  if (titleMsg) {
    return {
      messages: [titleMsg],
    };
  }
  const bodyMsg = isThreadBodyValid(body);
  if (bodyMsg) {
    return {
      messages: [bodyMsg],
    };
  }

  // users must be logged in to post
  if (!userId) {
    return {
      messages: ["User not logged in."],
    };
  }
  const user = await User.findOne({
    id: userId,
  });

  const category = await ThreadCategory.findOne({
    id: categoryId,
  });
  if (!category) {
    return {
      messages: ["category not found."],
    };
  }
  const thread = await Thread.create({
    title,
    body,
    user,
    category,
  }).save();
  if (!thread) {
    return {
      messages: ["Failed to create thread."],
    };
  }

  return {
    messages: [thread.id],
  };
};

export const getThreadById = async (
  id: string
): Promise<QueryOneResult<Thread>> => {
  const thread = await Thread.findOne({
    where: {
      id,
    },
    relations: [
      "user",
      "threadItems",
      "threadItems.user",
      "threadItems.thread",
      "category",
    ],
  });
  if (!thread) {
    return {
      messages: ["Thread not found."],
    };
  }

  // extra sort
  if (thread.threadItems) {
    thread.threadItems.sort((a: ThreadItem, b: ThreadItem) => {
      if (a.createdOn > b.createdOn) return -1;
      if (a.createdOn < b.createdOn) return 1;
      return 0;
    });
  }

  return {
    entity: thread,
  };
};

export const getThreadsByCategoryId = async (
  categoryId: string
): Promise<QueryArrayResult<Thread>> => {
  const threads = await Thread.createQueryBuilder("thread")
    .where(`thread."categoryId" = :categoryId`, { categoryId })
    .leftJoinAndSelect("thread.category", "category")
    .leftJoinAndSelect("thread.threadItems", "threadItems")
    .leftJoinAndSelect("thread.user", "user")
    .orderBy("thread.createdOn", "DESC")
    .getMany();

  if (!threads || threads.length === 0) {
    return {
      messages: ["Threads of category not found."],
    };
  }
  console.log(threads);
  return {
    entities: threads,
  };
};

export const getThreadsLatest = async (): Promise<QueryArrayResult<Thread>> => {
  const threads = await Thread.createQueryBuilder("thread")
    .leftJoinAndSelect("thread.category", "category")
    .leftJoinAndSelect("thread.user", "user")
    .leftJoinAndSelect("thread.threadItems", "threadItems")
    .orderBy("thread.createdOn", "DESC")
    .take(10)
    .getMany();

  if (!threads || threads.length === 0) {
    return {
      messages: ["No threads found."],
    };
  }
  console.log(threads);
  return {
    entities: threads,
  };
};
