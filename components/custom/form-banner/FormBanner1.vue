<template>
  <div>
    <div class="formbanner1-component mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Form Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <h2 class="formbanner1-title font-weight-bold">
                Die deutsche Telegram Fanseite
              </h2>
              <p class="mt-16 pt-4">
                Auf dieser Webseite findet ihr allgemeine Informationen zum Messenger. Darüber hinaus pflegen wir ein Übersicht über Gruppen und Kanälen
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="5" class="ml-auto">
            <v-img
              :src="require('@/assets/images/form-banner/form-banner1.png')"
              alt="banner"
            />
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Form Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormBanner1",
  data() {
    return {};
  },
  methods: {},
};
</script>
