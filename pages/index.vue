<template>
  <div>
    <FormBanner1 />
    <Feature />
    <Jumbotron
      title="Telegram ist und bleibt kostenlos. Keine Werbung. Keine Abos."
      section="02" />
    <About />
    <ShowCase />
    <Jumbotron
      title="Synchronisiere deine Chats auf all deinen Geräten. Egal ob Mac, PC oder Android."
      section="01" />
    <Faq />
    <C2a2 />
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
import AllCustomComponents from "@/components/custom/AllCustomComponents";
import Portfolio from "@/components/custom/portfolio/Portfolio";
import PortfolioText from "@/components/custom/portfolio/PortfolioText";
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
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
    PortfolioText,
    Portfolio,
    AllCustomComponents,
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
