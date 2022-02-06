<template>
  <div>
    <div class="feature1-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Feature 1
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-13">
          <v-col cols="12" md="4">
            <v-card elevation="0">
              <v-card-text class="text-center">
                <div class="icon-round bg-light-info">
                  <i class="mdi mdi-currency-usd-off"></i>
                </div>
                <h5 class="font-weight-medium font-18">Kostenlos</h5>
                <p class="mt-10 mb-8">
                  Die Telegram App ist kostenlos und das bleibt es auch. Keine Werbung. Keine versteckten Kosten. Das ist zumindest das Versprechen des Betreibers. Telegram kann als Smartphone App unter IOS und Android genutzt werden sowie auf einem PC installiert werden.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card elevation="0">
              <v-card-text class="text-center">
                <div class="icon-round bg-light-info">
                  <i class="mdi mdi-shield-check"></i>
                </div>
                <h5 class="font-weight-medium font-18">Sicher</h5>
                <p class="mt-10 mb-8">
                  Telegram verschlüsselt deine Nachrichten. So bist du jederzeit sicher unterwegs
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card elevation="0">
              <v-card-text class="text-center">
                <div class="icon-round bg-light-info">
                  <i class="mdi mdi-cloud-sync"></i>
                </div>
                <h5 class="font-weight-medium font-18">Synchronisiert</h5>
                <p class="mt-10 mb-8">
                  Telegram kann mit mehreren Geräten gleichzeitig genutzt werden
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feature",
  data() {
    return {};
  },
  methods: {},
};
</script>
