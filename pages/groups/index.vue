<template>
  <GroupList></GroupList>
</template>

<script>
import GroupList from "@/components/GroupList";

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
  components: { GroupList },
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
