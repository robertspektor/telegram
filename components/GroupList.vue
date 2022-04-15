<template>
  <div class="bg-extra-light">
    <div class="">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="">
              <h1 class="ui-title mb-1">Gruppen & Kanäle</h1>
              <p v-if="!groupStore.isFetching">{{ groupStore.meta.total }} Gruppen & Kanäle</p>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="float-right">
              <v-btn
                class="mt-15"
                rounded
                color="primary"
                dark
                to="/groups/add"
              >
                <fa :icon="['fas', 'plus']" class="mr-4" /> Gruppe hinzufügen
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <div class="text-center pt-15" v-if="groupStore.isFetching">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <v-container>
        <v-row >
          <v-col cols="12">
            <div class="float-right">
              <v-pagination
                class="elevation-0"
                v-if="!groupStore.isFetching"
                v-model="groupStore.meta.current_page"
                :length="6"
                @input="input"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12">
            <v-chip-group
              active-class="primary--text"
              column
              v-if="categoryStore.isFinish"
            >
              <v-chip
                :to="/groups/+category.system_title"
                v-for="category in categoryStore.getCategories"
                :class="{'active': category.system_title === groupStore.category}"
                :key="category.title"
              >
                {{ category.title }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
        <v-row v-if="!groupStore.isFetching">
          <v-col class="d-flex flex-column" cols="6" v-for="item in groupStore.results" :key="item.id">
            <v-hover
              v-slot="{ hover }"
              close-delay="100">

              <v-card
                :to="'/' + item.system_name"
                :elevation="hover ? 1 : 0"
                :loading="groupStore.isFetching"
                :class="{ 'on-hover': hover }"
                class="card-shadow theme--light my-6 flex d-flex flex-column"
              >

                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>
                  <fa :icon="['fas', 'users']" />

                  {{ item.members }}
                </v-card-subtitle>

                <v-divider class="mx-4"></v-divider>
                <v-card-text><p class="text-sm-left">{{ item.description | truncate(200) }}</p></v-card-text>

                <v-card-text class="mt-auto">
                  <v-chip-group
                    active-class="deep-purple accent-4 white--text "
                    column
                  >
                    <v-chip
                      :to="/groups/+category.system_title"
                      label
                      small
                      :class="{'active': category.system_title === groupStore.category}"
                      v-for="category in item.categories" :key="category.id">{{ category.title }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>

              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { useGroups } from "@/stores/groups";
import { useCategories } from "@/stores/categories";
import { useRoute } from "@nuxtjs/composition-api";

export default {
  props: [],
  data() {
    return {
      countGroups: 0,
      countChannels: 0,
      groups: [],
    }
  },
  methods: {
    input: function (number) {
      const groupStore = useGroups();
      groupStore.currentPage = number;
      groupStore.fetchGroups()
    }
  },
  setup: function() {

    const route = useRoute();
    const groupStore = useGroups();

    if (typeof route.value.params.byCategory !== 'undefined') {
      groupStore.category = route.value.params.byCategory;
    }

    groupStore.fetchGroups()

    const categoryStore = useCategories();
    categoryStore.fetch();

    return { groupStore, categoryStore }
  },
};
</script>
