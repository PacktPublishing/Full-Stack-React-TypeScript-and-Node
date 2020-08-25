import Category from "../models/Category";
import Thread from "../models/Thread";

class DataService {
  async getCategories(): Promise<Array<Category>> {
    const promise = new Promise<Array<Category>>((res, rej) => {
      setTimeout(() => {
        const categories = [];
        const programming = new Category(1, "Programming");
        categories.push(programming);
        const cooking = new Category(2, "Cooking");
        categories.push(cooking);
        const sports = new Category(3, "Sports");
        categories.push(sports);
        const entertainment = new Category(4, "Entertainment");
        categories.push(entertainment);
        const travel = new Category(5, "Travel");
        categories.push(travel);

        res(categories);
      }, 2000);
    });
    return promise;
  }

  async getThreadsByCategory(catId: string): Promise<Array<Thread>> {
    const promise = new Promise<Array<Thread>>((res, rej) => {
      setTimeout(() => {
        const threads: Array<Thread> = [];
        threads.push({
          id: "1",
          views: 22,
          flagPoints: 0,
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
              flagPoints: 1,
              body: "ThreadItem 1",
              userName: "jon",
              userId: "2",
              createdOn: new Date(),
            },
          ],
          category: new Category(1, "Programming"),
        });
        threads.push({
          id: "2",
          views: 2,
          flagPoints: 0,
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
              flagPoints: 1,
              body: "ThreadItem 1",
              userName: "jon",
              userId: "2",
              createdOn: new Date(),
            },
          ],
          category: new Category(1, "Programming"),
        });

        res(threads);
      }, 2000);
    });
    return promise;
  }
}

export let dataService = new DataService();
