<template>
  <div id="game"></div>
</template>

<script>
import Game from '~/game';

export default {
  mounted () {
    this.game = new Game();
  },
  methods: {
    closeModal: function() {
      this.test = 'close'
    }
  },
  data () {
    return {
      game: null
    }
  }
}
</script>

<style lang="scss">
  #game {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/bg.png');

    canvas {
      width: 100%;
      max-width: 1280px;
    }
  }
</style>
