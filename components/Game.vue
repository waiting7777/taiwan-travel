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
        <div id="cert-reward" v-if="stage == 2">
          <img v-for="(item, index) in reward" :key="index" :src="`/images/${item.name}-reward-${item.num}.png`" />
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
      if (event.detail && event.detail.reward) {
        this.reward = event.detail.reward
        console.log(this.reward)
      }
    })
    window.addEventListener('resize', (event) => {
      if (window.innerWidth >= 1024) {
        game.scale.resize(1280, 675)
      } else {
        game.scale.resize(375, 530)
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
      submitStatus: null,
      reward: []
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

      @media screen and (max-width: 1023px) {
        width: 90%;
        height: 67.5vw;
      }

      .text-danger {
        font-size: 14px;
      }

      #cert-title {
        margin: 0 auto;
        width: 226px;
        position: relative;
        left: -50px;
        top: 40px;

        @media screen and (max-width: 1023px) {
          top: 28px;
          left: -31px;
          text-align: center;
        }

        img {
          width: 100%;

          @media screen and (max-width: 1023px) {
            width: 140px;
          }
        }
      }

      #cert-text {
        position: absolute;
        top: 164px;
        left: 61px;
        font-size: 16px;

        @media screen and (max-width: 1023px) {
          top: 39%;
          left: 6%;
        }
      }

      #cert-text.active {
        top: 130px;

        @media screen and (max-width: 1023px) {
          top: 28%;

          img {
            width: 200px;
          }
        }
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

        @media screen and (max-width: 1023px) {
          top: 50%;
          left: 50%;
        }

        input {
          width: 100px;
          height: 24px;

          @media screen and (max-width: 1023px) {
            width: 90px;
          }
        }
      }

      #cert-reward {
        position: absolute;
        top: 230px;
        left: 60px;

        @media screen and (max-width: 1023px) {
          top: calc(28% + 82px);
          left: 6%;
        }

        img {
          width: 60px;

          @media screen and (max-width: 1023px) {
            width: 35px;
          }
        }
      }

      #cert-again {
        position: absolute;
        bottom: 40px;
        left: 37px;

        @media screen and (max-width: 1023px) {
          width: 120px;
          bottom: 10%;
          left: 5%;

          img {
            width: 100%;
          }
        }
      }

      #cert-draw {
        position: absolute;
        bottom: 40px;
        right: 135px;
        cursor: pointer;

        @media screen and (max-width: 1023px) {
          width: 120px;
          bottom: 10%;
          left: 40%;

          img {
            width: 100%;
          }
        }
      }

      #cert-ticket {
        position: absolute;
        bottom: 40px;
        left: 25px;
        cursor: pointer;

        @media screen and (max-width: 1023px) {
          width: 90px;
          bottom: 10%;
          left: 5%;

          img {
            width: 100%;
          }
        }
      }

      #cert-schedule {
        position: absolute;
        bottom: 40px;
        left: 160px;

        @media screen and (max-width: 1023px) {
          width: 90px;
          bottom: 10%;
          left: calc(5% + 90px);

          img {
            width: 100%;
          }
        }
      }

      #cert-share {
        position: absolute;
        bottom: 40px;
        right: 115px;

        @media screen and (max-width: 1023px) {
          width: 90px;
          bottom: 10%;
          left: calc(5% + 180px);

          img {
            width: 100%;
          }
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

    @media screen and (max-width: 1023px) {
      width: 90%;
      left: 0;
    }

    #modal-head {
      font-size: 18px;
      font-weight: bold;
    }

    #modal-image {
      margin: 10px auto;
      display: block;

      @media screen and (max-width: 1023px) {
        max-width: 300px;
      }
    }

    #modal-text {
      font-size: 16px;

      @media screen and (max-width: 1023px) {
        font-size: 14px;
      }
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

      @media screen and (max-width: 1023px) {
        margin-top: 10px;
      }
    }

    #modal-button:hover {
      transform: translate(1px, 1px);
    }
  }
</style>
