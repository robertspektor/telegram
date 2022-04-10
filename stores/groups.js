import { defineStore } from "pinia";

export const useGroups = defineStore("groups-store", {
  state: () => {
    return {
      currentPage: 1,
      groups: [],
      group: [],
      category: '',
      fetching: false,
    };
  },

  getters: {
    results(state) {
      return state.groups.data;
    },

    getGroup(state) {
      return state.group.data;
    },

    meta(state) {
      return state.groups.meta;
    },

    isFetching(state) {
      return state.fetching;
    },
  },

  actions: {
    async fetchGroup(groupId) {

      this.fetching = true;
      const response = await fetch(
        "https://api.telegram.de/groups/" + groupId
      );

      try {
        this.group = await response.json();
      } catch (err) {
        this.group = [];
        console.error("Error loading group:", err);
        return err;
      }

      this.fetching = false;
    },
    async fetchGroups() {

      let route = "https://api.telegram.de/groups?page=" + this.currentPage;

      if (this.category !== '') {
        route += "&category=" + this.category;
      }

      this.fetching = true;
      const response = await fetch(route);

      try {
        this.groups = await response.json();
      } catch (err) {
        this.groups = [];
        console.error("Error loading groups:", err);
        return err;
      }

      this.fetching = false;
    },
  },
});
