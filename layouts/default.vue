<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "Telegram: Impressum",
      meta: [
        {
          hid: "Telegram.de ist deutschsprachige Fanseite der kostenlosen WhatsApp-Alternative Telegram. Sicherer, schneller und einfacher!",
          name: "Die deutsche Telegram Fanseite",
          content: "Die deutsche Telegram Fanseite"
        }
      ]
    };
  },
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  methods: {}
};
</script>

<style></style>
