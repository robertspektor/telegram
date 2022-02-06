<template>
  <div>

  </div>
</template>

<script>
import FormBanner1 from "../components/custom/form-banner/FormBanner1";
import Feature from "../components/custom/features/Feature";
import About from "../components/About";
import ShowCase from "../components/ShowCase";
import Jumbotron from "../components/Jumbotron";
import Faq from "../components/Faq";
import C2a2 from "../components/custom/c2a/C2a2";
export default {
  head() {
    return {
      title: "Telegram: Impressum",
      meta: [
        {
          hid: "Telegram.de ist deutschsprachige Fanseite der kostenlosen WhatsApp-Alternative Telegram. Sicherer, schneller und einfacher!",
          name: "Telegram",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    C2a2,
    Faq,
    Jumbotron,
    ShowCase,
    About,
    Feature,
    FormBanner1
  },
};
</script>
