<template>
  <div id="headbar">
    <div id="headbar-logo">
      <div id="logo">
        <a href="/">
          <img src="/images/logo.png" />
        </a>
      </div>
    </div>
    <div id="headbar-bars" @click="toggleMenu">
      <i v-if="!menuOpen" class="fas fa-bars"></i>
      <i v-if="menuOpen" class="fas fa-times"></i>
    </div>
    <div id="headbar-menu-m" :class="{ active: menuOpen }">
      <div class="headbar-button-m">
        <nuxt-link to="/">
          回到首頁
        </nuxt-link>
      </div>
      <div class="headbar-button-m">
        <nuxt-link to="/schedule">
          觀光行程
        </nuxt-link>
      </div>
      <div class="headbar-button-m">
        <nuxt-link to="/terms">
          抽獎辦法
        </nuxt-link>
      </div>
      <div class="headbar-button-m">分享遊戲 <img src="/images/fb.png" style="position:absolute"/></div>
      <img id="menu-bar-cat" src="/images/m/menu-bar-cat.png" />
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
      <div class="headbar-button">分享遊戲 <img src="/images/fb.png" /></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss">
  #headbar {
    #headbar-bars {
      position: absolute;
      width: 30px;
      height: 40px;
      top: 7px;
      right: 9px;
      font-size: 32px;
      display: none;

      @media screen and (max-width: 1023px) {
        display: block;
      }
    }

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
          width: 150px;
        }
      }
    }

    #headbar-menu-m.active {
      height: calc(100vh - 61.42px);
      opacity: 1;
      pointer-events: initial;
    }

    #headbar-menu-m {
      height: 0;
      opacity: 0;
      position: absolute;
      z-index: 9999;
      width: 100%;
      top: 61.42px;
      left: 0;
      background: #fff;
      padding-top: 60px;
      transition: all 0.7s ease;
      pointer-events: none;

      #menu-bar-cat {
        position: absolute;
        bottom: 5px;
        left: 50%;
        margin-left: -122px;
      }


      .headbar-button-m {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 1px solid #000;
        width: 160px;
        height: 40px;
        margin: 5px auto;
        text-align: center;

        a {
          color: #000;
          text-decoration: none;
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