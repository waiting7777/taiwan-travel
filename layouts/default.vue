<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
  body {
    font-family: Arial, "Microsoft JhengHei","微軟正黑體", sans-serif;
  }

  body.lock {
    height: 100vh;
    overflow: hidden;
  }

  .alert-danger {
    padding: 3px 5px !important;
  }

  .carousel-inner {
    height: 480px;

    @media screen and (max-width: 1023px) {
      height: 215px;
    }
  }

  .carousel-caption {
    bottom: -47px;
    left: 5%;
    right: 5%;

    @media screen and (max-width: 1023px) {
      bottom: -60px;
    }
    
    h3 {
      font-size: 12px;
      color: #000;
      font-weight: normal;
    }
  }
</style>
