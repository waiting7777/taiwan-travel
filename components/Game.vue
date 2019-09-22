<template>
  <section>
    <div id="game"></div>
  </section>
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
    background-size: cover;
    background-repeat: no-repeat;

    canvas {
      width: 100%;
      max-width: 1280px;
    }
  }

  #modal {
    width: 400px;
    background: #efefef;
    padding: 15px;
    display: flex;
    flex-direction: column;

    #modal-head {
      font-size: 18px;
      font-weight: bold;
    }

    #modal-image {
      margin: 10px auto;
      display: block;
    }

    #modal-text {
      font-size: 16px;
    }

    #modal-button {
      float: right;
      margin-top: 30px;
      width: 86px;
      padding: 7px 10px;
      text-align: center;
      bottom: 15px;
      right: 15px;
      color: #fff;
      background: #434343;
      border-radius: 10px;
      cursor: pointer;
    }

    #modal-button:hover {
      transform: translate(1px, 1px);
    }
  }
</style>
