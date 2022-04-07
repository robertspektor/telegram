<template>
  <GroupList :category="category"></GroupList>
</template>

<script>
  import GroupList from "@/components/GroupList";

  export default {
    head() {
      return {
        title: "Deutsche Telegram Gruppen und Kanäle | " + this.category,
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
        category: ''
      }
    },
    methods: {

    },
    setup: function() {

    },
  };
</script>
