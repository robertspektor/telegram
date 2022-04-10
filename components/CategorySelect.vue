<!-- Vue component -->
<template>
  <div>
    <v-select
      v-model="value"
      :items="options"
      item-text="title"
      item-value="id"
      chips
      label="Kategorien"
      :error-messages="error"
      multiple
      outlined
    ></v-select>
  </div>
</template>

<script>

export default {
  props: ['error'],
  mounted() {
    this.getCategories();
  },
  data () {
    return {
      value: [],
      options: []
    }
  },
  methods: {
    async getCategories() {
      const response = await fetch('https://api.telegram.de/api/categories');
      let data = await response.json();
      this.options = data.data
    }
  }
}
</script>
