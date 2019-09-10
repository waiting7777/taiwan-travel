<template>
  <div id="headbar">
    <div id="headbar-logo">
      <div id="logo">
        LOGO 製作中
      </div>
    </div>
    <div id="headbar-button-contain">
      <div class="headbar-button">回到首頁</div>
      <div class="headbar-button">觀光行程</div>
      <div class="headbar-button">抽獎辦法</div>
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
      padding: 50px 0 20px 0;
    }

    #logo {
      width: 300px;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    #headbar-button-contain {
      display: flex;
      justify-content: center;
      align-items: center;

      .headbar-button {
        width: 150px;
        padding: 20px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
</style>