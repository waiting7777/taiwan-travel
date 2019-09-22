<template>
  <div class="main">
    <Headbar />
    <Game />
    <Footer />
  </div>
</template>

<script>
import Headbar from '~/components/Headbar.vue'
import Game from '~/components/Game.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Headbar, Game, Footer
  }
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
  }
</style>
