<!-- Vue component -->
<template>
  <div>
    <v-select
      v-model="value"
      :items="options"
      item-text="title"
      item-value="id"
      chips
      label="Sprachen"
      multiple
      :error-messages="error"
      outlined
    ></v-select>
  </div>
</template>

<script>

export default {
  props: ['error'],
  mounted() {
    this.getLanguages();

  },
  data () {
    return {
      value: [],
      options: []
    }
  },
  methods: {
    async getLanguages() {
      const response = await fetch('https://api.telegram.de/languages');
      let data = await response.json();
      this.options = data.data
    }
  }
}
</script>

