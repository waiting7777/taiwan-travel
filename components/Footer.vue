<template>
  <div id="footer">
    <a href="https://www.worldjournal.com" target="_blank">
      <img id="wj" src="/images/wj.png" />
    </a>
    <a href="https://www.taiwan.net.tw/" target="_blank">
      <img id="tw" src="/images/tw.jpg" />
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
    display: grid;
    padding: 0 15px;
    grid-template-columns: 135px 175px auto 190px;
    grid-gap: 15px;
    align-items: center;
    margin-top: 7px;

    #tw {
      width: 100%;
    }

    #text {
      font-size: 12px;
    }

    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 7px;
      height: auto;
      padding-bottom: 20px;

      #ca {
        grid-column-start: 1;
        grid-column-end: 3;
        text-align: center;
        height: 50px;
      }

      #text {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
        text-align: center;
      }
    }

    #ca {
      img {
        margin-right: 15px;
      }
    }
  }
</style>
