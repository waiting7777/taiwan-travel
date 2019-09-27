<template>
  <div id="headbar">
    <div id="headbar-logo">
      <div id="logo">
        <a href="/">
          <img src="/images/logo.png" />
        </a>
      </div>
    </div>
    <div id="headbar-button-contain">
      <div class="headbar-button">
        <nuxt-link to="/">
          回到首頁
        </nuxt-link>
      </div>
      <div class="headbar-button">
        <nuxt-link to="/schedule">
          觀光行程
        </nuxt-link>
      </div>
      <div class="headbar-button">
        <nuxt-link to="/terms">
          抽獎辦法
        </nuxt-link>
      </div>
      <div class="headbar-button">分享遊戲</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  #headbar {
    #headbar-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #d9d9d9;
      padding: 10px 0;
      border-top: 5px solid #f6b26b;

      @media screen and (max-width: 1023px) {
        border-bottom: none;

        img {
          width: 200px;
        }
      }
    }

    #headbar-button-contain {
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 1023px) {
        display: none;
      }

      .headbar-button {
        width: 150px;
        padding: 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;

        a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
</style>