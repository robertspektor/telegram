import { defineStore } from "pinia";

export const useGroups = defineStore("groups-store", {
  state: () => {
    return {
      currentPage: 1,
      groups: [],
      group: [],
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
        "http://localhost:8005/groups/" + groupId
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

      this.fetching = true;
      const response = await fetch(
        "http://localhost:8005/groups?page=" + this.currentPage
      );

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
