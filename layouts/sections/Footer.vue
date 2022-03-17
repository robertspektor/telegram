<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center">
          <p>
            © 2022
            <a href="https://telegram.de" class="link">telegram.de</a>
          </p>
          <div class="ml-auto">
            <div class="d-flex align-center">
              <a href="/impressum" class="link px-4">Impressum</a>
              <a href="/datenschutz" class="link px-4">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: [],
    };
  },
  components: {},
};
</script>
