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

<style lang="scss">
  .main {
    height: 100vh;
  }

  #cat {
    position: absolute;
    bottom: 200px;
    left: 50%;
    margin-left: -300px;

    img {
      width: 600px;
    }
  }

  #taipei {
    width: 600px;
    height: 300px;
    border: 1px solid red;
    position: absolute;
    top: 100px;
    left: 100px;
  }

  #button {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -25px;
    font-size: 36px;
    border: 1px solid #000;
    border-radius: 25px;
    box-shadow: 1px 1px 1px 1px gray;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
      color: #000;
    }
  }

  #button:hover {
    transform: translate(1px, 1px);
  }
</style>
