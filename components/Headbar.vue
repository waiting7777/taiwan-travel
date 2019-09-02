<template>
  <div>
    <b-navbar toggleable="sm" type="dark" fixed="top">
      <b-navbar-brand href="/">Logo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="nav-button">
            <nuxt-link to="/">
              回首頁
            </nuxt-link>
          </div>
          <div class="nav-button">觀光行程</div>
          <div class="nav-button">抽獎辦法</div>
          <div class="nav-button">分享</div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  nav {
    background: #009999;
  }

  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    width: 100px;
    height: 40px;
    margin: 5px 7px;
    box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 0.7);
    cursor: pointer;

    a {
      color: #000;
      text-decoration: none;
    }
  }

  .nav-button:hover {
    transform: translate(1px, 1px);
  }
</style>