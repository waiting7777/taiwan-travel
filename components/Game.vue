<template>
  <section>
    <div id="game"></div>
    <!-- <div id="modal">
      <div id="modal-head">台北 101</div>
      <div id="modal-image">
        <img src="/images/taipei.jpg" />
      </div>
      <div id="modal-text">
        TAIPEI 101座落於台北最精華地段，除了是台灣首都地標外，每年跨年施放的煙火更成為亞洲代表之一。標高382公尺的89樓觀景台，除擁有全方位絕佳的觀景視野外，並提供其他多項設施，同時更可看到世界最大、最重、也是唯一外露供參觀的風阻尼器。
      </div>
      <div id="modal-button">繼續闖關</div>
    </div> -->
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
      margin-top: 10px;
      margin-bottom: 10px;
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
