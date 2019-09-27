<template>
  <div id="footer">
    <a href="https://www.worldjournal.com" target="_blank">
      <img id="wj" src="/images/wj.png" />
    </a>
    <a href="https://www.taiwan.net.tw/" target="_blank">
      <img id="tw" src="/images/tw.png" />
    </a>
    <div id="text">
      授權商：聯合數位文創股份有限公司<br/>
      圖像創作者：貓小姐Ms.Cat<br/>
      © Copyright Ms.Cat. Licensed by udnFunLife Co., LTD
    </div>
    <div id="ca">
      <a href="https://www.china-airlines.com" target="_blank">
        <img src="/images/ca.png" />
      </a>
      贊助
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss" scoped>
  #footer {
    height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 7px;

    #wj {
      margin: 0 15px;
    }

    #tw {
      margin: 0 15px;
    }

    #ca {
      margin-left: auto;
      margin-right: 20px;

      img {
        margin-right: 15px;
      }
    }
  }
</style>
