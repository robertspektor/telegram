import { defineStore } from "pinia";

export const useGroupsHistories = defineStore("groups-histories-store", {
  state: () => {
    return {
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [],
        }
      },
      history: [],
      finish: false,
    };
  },

  getters: {
    results(state) {
      return state.history.data;
    },

    meta(state) {
      return state.history.meta;
    },

    isFinish(state) {
      return state.finish;
    },

    getSeries(state) {
      return state.series;
    },

    getOptions(state) {
      return state.options;
    }
  },

  actions: {
    async fetch(groupId) {

      this.finish = false;

      const response = await fetch(
        "http://localhost:8005/groups/" + groupId + "/history"
      );

      try {

        this.history = await response.json();


        let seriesData = [];
        let categories = [];

        this.history.data.forEach(function (item, index, arr) {
          seriesData[index] = item.value
          categories[index] = item.date
        });


        this.series = [{
          name: 'Mitglieder',
          data: seriesData
        }];

        this.options.xaxis.categories = categories;

        this.finish = true;

      } catch (err) {
        this.history = [];
        console.error("Error loading group:", err);
        return err;
      }
    },
  },
});
