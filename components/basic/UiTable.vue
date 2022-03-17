<template>
  <div>
    <div class="">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold white--text">Gruppen & Kanäle</h2>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <div class="text-center pt-15" v-if="store.fetching">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <v-container>
        <v-row >
          <v-col cols="12" >
            <v-card>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Id</th>
                        <th class="text-left">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in groups" :key="item.id">
                        <td>{{ item.name }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiTable",
  props: ['groups'],
  data() {
    return {
    };
  },
  methods: {},
};
</script>
