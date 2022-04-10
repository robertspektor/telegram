<template>
  <div>
    <div class="bg-extra-light">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="ui-title mb-1">Gruppen & Kanäle</h2>
            <p>Hier kannst du neue Telegram Gruppen oder Kanäle hinzufügen.</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <AddGroupForm></AddGroupForm>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { useGroups } from "@/stores/groups";
import AllCustomComponents from "@/components/custom/AllCustomComponents";
import UiForm from "@/components/basic/UiForm";

export default {
  components: {UiForm, AllCustomComponents},

  head() {
    return {
      title: "Telegram - Gruppen"
    };
  },

  data() {
    return {

    }
  },
  methods: {

  },
  setup: function() {
  },
};
</script>
