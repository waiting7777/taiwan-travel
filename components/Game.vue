<template>
  <section>
    <div id="game">
      <div id="cert" :class="{ active: certOpen }">
        <div id="cert-title">
          <img src="/images/cert-title.png" />
        </div>
        <div id="cert-text" :class="{ active: stage == 2 }">
          <div id="cert-name" v-if="stage == 2">{{name}}</div>
          <img v-if="stage == 1" src="/images/cert-text-1.png" />
          <img v-if="stage == 2" src="/images/cert-text-2.png" />
        </div>
        <div id="cert-input" v-if="stage == 1">
          <input type="text" v-model="name">
          <p v-if="submitStatus === 'error'" class="text-danger">請輸入暱稱</p>
        </div>
        <div id="cert-again" v-if="stage == 1">
          <a href="/">
            <img src="/images/cert-again.png" />
          </a>
        </div>
        <div id="cert-draw" @click="nextStage()" v-if="stage == 1">
          <img src="/images/cert-draw.png" />
        </div>
        <div id="cert-ticket" v-if="stage == 2">
          <a href="https://zh.surveymonkey.com/r/wjtaiwan" target="_blank">
            <img src="/images/cert-ticket.png" />
          </a>
        </div>
        <div id="cert-schedule" v-if="stage == 2">
          <a href="/schedule" target="_blank">
            <img src="/images/cert-schedule.png" />
          </a>
        </div>
        <div id="cert-share" v-if="stage == 2">
          <a href="/">
            <img src="/images/cert-share.png" />
          </a>
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
  methods: {
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    nextStage() {
      if (this.name.length === 0) {
        this.submitStatus = 'error'
        return;
      }
      this.submitStatus = 'success'
      this.stage = 2;
    }
  },
  data () {
    return {
      game: null,
      certOpen: false,
      stage: 1,
      name: '',
      submitStatus: null
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
      width: 546px;
      height: 409px;
      background-image: url('/images/cert-1.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0;
      transition: all 0.7s ease;
      pointer-events: none;

      .text-danger {
        font-size: 14px;
      }

      #cert-title {
        margin: 0 auto;
        width: 226px;
        position: relative;
        left: -50px;
        top: 40px;
      }

      #cert-text {
        position: absolute;
        top: 164px;
        left: 61px;
        font-size: 16px;
      }

      #cert-text.active {
        top: 130px;
      }

      #cert-name {
        font-size: 16px;
        font-weight: bold;
        padding-left: 5px;
      }

      #cert-input {
        position: absolute;
        left: 226px;
        top: 190px;

        input {
          width: 100px;
          height: 24px;
        }
      }

      #cert-again {
        position: absolute;
        bottom: 40px;
        left: 37px;
      }

      #cert-draw {
        position: absolute;
        bottom: 40px;
        right: 135px;
        cursor: pointer;
      }

      #cert-ticket {
        position: absolute;
        bottom: 40px;
        left: 25px;
        cursor: pointer;
      }

      #cert-schedule {
        position: absolute;
        bottom: 40px;
        left: 160px;
      }

      #cert-share {
        position: absolute;
        bottom: 40px;
        right: 115px;
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
