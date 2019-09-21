<template>
  <div class="main">
    <Headbar />
    <div id="schedule">
      <img id="bg" src="/images/train.png" alt="">
      <img id="cat" src="/images/train-cat.png" alt="">
      <img id="bear" src="/images/train-bear.png" alt="">
      <img id="circle-1" class="circle" src="/images/blue-circle.png" alt="">
      <img id="arrow-1" src="/images/arrow-right.png" alt="">
      <img id="circle-2" class="circle" src="/images/blue-circle.png" alt="">
      <img id="circle-3" class="circle" src="/images/blue-circle.png" alt="">
      <img id="circle-4" class="circle" src="/images/blue-circle.png" alt="">
      <img id="circle-5" class="circle" src="/images/blue-circle.png" alt="">
      <img id="circle-6" class="circle" src="/images/blue-circle.png" alt="">
    </div>
    <Footer />
  </div>
</template>

<script>
import Headbar from '~/components/Headbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Headbar, Footer
  }
}
</script>

<style lang="scss">
  .main {
    height: 100vh;

    #schedule {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      position: relative;

      #bg {
        width: 100%;
      }

      #cat {
        position: absolute;
        top: calc(50% + 300px);
        left: 5%;
      }

      #bear {
        position: absolute;
        top: 50%;
        left: 5%;
      }

      .circle {
        cursor: pointer;
      }

      .circle:hover {
        transform: translate(1px, 1px);
      }

      #circle-1 {
        position: absolute;
        top: calc(50% + 80px);
        left: calc(5% + 200px);
      }

      #arrow-1 {
        position: absolute;
        top: calc(50% + 135px);
        left: calc(5% + 350px);
      }

      #circle-2 {
        position: absolute;
        top: calc(50% + 80px);
        left: calc(5% + 390px);
      }

      #circle-3 {
        position: absolute;
        top: calc(50% + 80px);
        left: calc(5% + 550px);
      }

      #circle-4 {
        position: absolute;
        top: calc(50% + 80px);
        left: calc(5% + 710px);
      }

      #circle-5 {
        position: absolute;
        top: calc(50% + 80px);
        left: calc(5% + 870px);
      }

      #circle-6 {
        position: absolute;
        top: calc(50% + 80px);
        left: calc(5% + 1030px);
      }
    }
  }
</style>
