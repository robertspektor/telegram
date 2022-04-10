import { defineStore } from "pinia";

export const useCategories = defineStore("categories-store", {
  state: () => {
    return {
      categories: [],
      finish: false,
    };
  },

  getters: {
    getCategories(state) {
      return state.categories.data;
    },

    isFinish(state) {
      return state.finish;
    },
  },

  actions: {
    async fetch() {

      this.finish = false;

      const response = await fetch(
        "https://api.telegram.de/api/categories"
      );

      try {

        this.categories = await response.json();

        this.finish = true;

      } catch (err) {
        this.categories = [];
        console.error("Error loading categories:", err);
        return err;
      }
    },
  },
});
