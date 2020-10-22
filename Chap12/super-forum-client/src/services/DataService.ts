import Category from "../models/Category";
import CategoryThread from "../models/CategoryThread";
import Thread from "../models/Thread";

export async function getCategories(): Promise<Array<Category>> {
  const promise = new Promise<Array<Category>>((res, rej) => {
    setTimeout(() => {
      const categories = [];
      const programming = new Category("1", "Programming");
      categories.push(programming);
      const cooking = new Category("2", "Cooking");
      categories.push(cooking);
      const sports = new Category("3", "Sports");
      categories.push(sports);
      const entertainment = new Category("4", "Entertainment");
      categories.push(entertainment);
      const travel = new Category("5", "Travel");
      categories.push(travel);

      res(categories);
    }, 2000);
  });
  return promise;
}

export async function getThreadsByCategory(
  catId: string
): Promise<Array<Thread>> {
  const promise = new Promise<Array<Thread>>((res, rej) => {
    setTimeout(() => {
      const threads: Array<Thread> = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Thread 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programming"),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Thread 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Programming"),
      });

      res(threads);
    }, 2000);
  });
  return promise;
}

export async function getTopCategories(): Promise<Array<CategoryThread>> {
  const promise = new Promise<Array<CategoryThread>>((res, rej) => {
    setTimeout(() => {
      const topCategories = [];
      const js = new CategoryThread(
        "1",
        "Programming",
        "How can I learn JavaScript"
      );
      topCategories.push(js);
      const node = new CategoryThread(
        "2",
        "Programming",
        "How can I learn Node"
      );
      topCategories.push(node);
      const react = new CategoryThread(
        "3",
        "Programming",
        "How can I learn React"
      );
      topCategories.push(react);
      const french = new CategoryThread(
        "4",
        "Cooking",
        "How do I learn French cuisine?"
      );
      topCategories.push(french);
      const italian = new CategoryThread(
        "5",
        "Cooking",
        "How do I learn Italian cuisine?"
      );
      topCategories.push(italian);
      const soccer = new CategoryThread(
        "6",
        "Sports",
        "How can I learn to play Soccer"
      );
      topCategories.push(soccer);
      const basketball = new CategoryThread(
        "7",
        "Sports",
        "How can I learn to play Basketball"
      );
      topCategories.push(basketball);
      const baseball = new CategoryThread(
        "8",
        "Sports",
        "How can I learn to play Baseball"
      );
      topCategories.push(baseball);

      res(topCategories);
    }, 2000);
  });
  return promise;
}

export async function getThreadById(Id: string): Promise<Thread> {
  const promise = new Promise<Thread>((res, rej) => {
    setTimeout(() => {
      const thread = {
        id: "1",
        views: 22,
        title: "Thread 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
          {
            id: "2",
            views: 11,
            points: 14,
            body: "ThreadItem 2",
            userName: "linda",
            userId: "4",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programming"),
      };

      res(thread);
    }, 2000);
  });
  return promise;
}

export async function getUserThreads(id: string): Promise<Array<Thread>> {
  const result = new Promise<Array<Thread>>((res) => {
    setTimeout(() => {
      const threads: Array<Thread> = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Thread 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Programming"),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Thread 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Programming"),
      });

      res(threads);
    }, 2000);
  });
  return result;
}
