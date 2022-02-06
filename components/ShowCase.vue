<template>
  <div>
    <div class="showcase-component mini-spacer">
      <br>
      <br>
      <div id="ac-wrapper" class="ac-wrapper" :class="{ 'ac-gridview': gridIsVisible }">
        <div class="ac-device" v-on:click="showGrid">
          <a href="#"><img :src="activeImage"/></a>
          <h3 class="ac-title">Pssst! Klicke auf das Bild!</h3>
        </div>
        <div class="ac-grid" :if="!gridIsVisible">
          <a href="#" v-on:click="showScreen(image1, $event)"><img :src="image1"/><span>Schreibe mit deinen Freunden</span></a>
          <a href="#" v-on:click="showScreen(image2, $event)"><img :src="image2"/><span>Kontaktübersicht</span></a>
          <a href="#" v-on:click="showScreen(image3, $event)"><img :src="image3"/><span>Gruppenchats</span></a>
          <a href="#" v-on:click="showScreen(image4, $event)"><img :src="image4"/><span>Profilseite</span></a>
        </div>
      </div><!-- ac-wrapper -->
      <br>
      <br>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    image1() {
      return require('../assets/images/screens/screen1.jpg')
    },
    image2() {
      return require('../assets/images/screens/screen2.jpg')
    },
    image3() {
      return require('../assets/images/screens/screen3.jpg')
    },
    image4() {
      return require('../assets/images/screens/screen4.jpg')
    }
  },
  data: function() {
    return {
      gridIsVisible:false,
      activeImage:''
    }
  },
  mounted() {
    this.activeImage = this.image2
  },
  methods: {
    showGrid: function(event) {
      event.preventDefault();
      this.gridIsVisible = !this.gridIsVisible;
    },
    showScreen: function (image, event) {
      event.preventDefault();
      this.activeImage = image;
      this.gridIsVisible = false;
    }
  }
}
</script>
