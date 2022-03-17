<template>
  <div class="bg-extra-light">
    <div class="text-center pt-15" v-if="groupStore.isFetching">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <div class="" >
      <v-container>
        <v-row v-if="!groupStore.isFetching">
          <v-col cols="12">
            <div class="">
              <h2 class="ui-title font-weight-bold mb-1">{{ groupStore.getGroup.name }}</h2>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text "
                column>
                <v-chip label small v-for="category in groupStore.getGroup.categories" :key="category.id">{{ category.title }}</v-chip>
              </v-chip-group>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card v-if="!groupStore.isFetching">
              <v-card-title>Beschreibung</v-card-title>
              <v-card-text><p>{{ groupStore.getGroup.description }}</p></v-card-text>
              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="join"
                >
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card v-if="groupsHistoryStore.isFinish">
              <v-card-title>Statistik</v-card-title>
              <Chart
                :series="groupsHistoryStore.getSeries"
                :options="groupsHistoryStore.getOptions"
              >
              </Chart>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { useGroups } from "@/stores/groups";
import { useGroupsHistories } from "@/stores/groupsHistories";
import Chart from "@/components/Chart";

export default {
  head() {
    return {
      title: "Telegram - Gruppen",
      meta: [
        {
          hid: "description",
          name: "Next Ui Kit",
          content: "Next Ui Kit is the best way",
        },
      ],
    };
  },
  components: {
    Chart
  },

  data() {
    return {
      loading: false,
      groupId: 0,
    }
  },
  methods: {
    selection: function (event) {
      console.log(event)
    },
    join: function (event) {
      console.log(event)
    }
  },
  setup: function() {

    let path = $nuxt.$route.path;
    let groupId = path.split('/').filter(n => n)[0];

    const groupStore = useGroups();
    groupStore.fetchGroup(groupId);

    const groupsHistoryStore = useGroupsHistories();
    groupsHistoryStore.fetch(groupId);

    return { groupStore, groupsHistoryStore }
  },
};
</script>
