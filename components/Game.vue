<template>
  <section>
    <div id="game">
      <div id="cert" :class="{ active: certOpen }">
        <div id="cert-input">
          <input type="text" v-model="name">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Game from '~/game';

export default {
  mounted () {
    window.game = new Game();
    window.addEventListener('cert', (event, param) => {
      console.log(event, param)
      this.certOpen = true
    })
    window.addEventListener('resize', (event) => {
      if (window.innerWidth >= 1280) {
        game.scale.resize(1280, 675)
      } else {
        game.scale.resize(window.innerWidth, window.innerHeight)
      }
    })
  },
  data () {
    return {
      game: null,
      certOpen: false,
      name: ''
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
    position: relative;

    #cert.active {
      opacity: 1;
      pointer-events: initial;
    }

    #cert {
      position: absolute;
      width: 450px;
      height: 364px;
      background-image: url('/images/cert-1.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0;
      transition: all 0.7s ease;
      pointer-events: none;

      #cert-input {
        position: absolute;
        left: 206px;
        top: 176px;

        input {
          width: 100px;
          height: 24px;
        }
      }
    }

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
