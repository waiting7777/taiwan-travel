<template>
<div>
  <div id="game"></div>
  </div>
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
    canvas {
      width: 100%;
    }
  }
</style>
