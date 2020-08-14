import Category from "../models/Category";

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
      }, 3000);
    });
    return promise;
  }
}

export let dataService = new DataService();
