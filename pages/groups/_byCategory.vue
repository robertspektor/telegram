<template>
  <GroupList :category="category"></GroupList>
</template>

<script>
  import GroupList from "@/components/GroupList";

  export default {
    head() {
      return {
        title: "Deutsche Telegram Gruppen und Kanäle | " + this.category
      };
    },
    components: { GroupList },
    data() {
      return {
        category: ''
      }
    },
    methods: {

    }

  };
</script>
