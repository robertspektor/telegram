<template>
  <div class="bg-dark white--text">
    <UiTable></UiTable>

  </div>
</template>

<script>
import UiTable from "../components/basic/UiTable";

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

  data() {
    return {};
  },
  components: {
    UiTable
  },
};
</script>
