<template>
  <div class="jumbotron-wrapper" ref="jumbotron" :style="{
      background: `url(${background})`,
      backgroundSize: `cover`,
      backgroundPosition: `center center`
    }">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <div>
            <h2 class="jumbotron-title font-weight-bold white--text">
              {{ title }}
            </h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Jumbotron",
  props: ['title', 'section'],
  computed: {
    background() {
      let section = this.section;
      return require(`~/assets/images/section${section}.jpg`);
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
