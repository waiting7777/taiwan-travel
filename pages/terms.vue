<template>
  <div class="main">
    <Headbar />
    <div id="terms">
      <div id="terms-title">2019年地圖尋寶活動<br/>抽獎辦法</div>
      <div id="terms-content">
        <ol>
          <li>居住在美國地區的讀者獲抽獎資格。</li>
          <li>活動期間為美東時間2019年10月1日至2019年11月30日晚間11點59分。</li>
          <li>參加辦法：於「台灣好好玩」活動網頁完成尋寶後，網頁將會導回此輸入個人資料頁面，方可填寫參加抽獎。</li>
          <li>活動獎項：華航「紐約─台北經濟艙」來回機票1張，共計1名得獎者。</li>
          <li>注意事項：每人限填寫一次抽獎資料，重複者將直接排除抽獎資格。</li>
          <li>抽獎方法：主辦單位於2019年12月5日，由電腦隨機抽出1名得獎者。將以email與電話通知得獎人。</li>
          <li>兌換方式：得獎者須於2019年12月31日前回覆中獎通知，相關領取方式將於中獎通知信公布。逾期提交資料及身份證明，將被取消資格。</li>
          <li>所有獎項不可轉換、轉讓或兌換現金。主辦單位保留更改獎項的權利，毋須另行通知。</li>
          <li>分享好禮：分享此網頁活動到臉書上，把權限設為「公開」並tag兩名臉書好友，並在貼文寫：「趕快來玩台灣好好玩尋寶 #台灣好好玩 #taiwanfun」，就有機會參加抽獎，共有10張$10美金星巴克e-gift card及高雄捷運一卡通等著你。</li>
          <li>任何因電腦、網路等問題而引致參加者所遞交的資料有遲延、遺失、錯誤、無法辨識等情況，主辦單位概不負責。</li>
        </ol>
      </div>
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

<style lang="scss" scoped>
  .main {

    #terms {
      width: 100%;
      margin: 0 auto;
      position: relative;
      background: #ffe599;
      padding: 20px 0;
      min-height: calc(100vh - 265px);

      #terms-title {
        font-weight: bold;
        font-size: 24px;
        text-align: center;
      }

      #terms-content {
        width: 1240px;
        margin: 40px auto;
        line-height: 32px;
        font-size: 18px;

        @media screen and (max-width: 1023px) {
          width: 100%;
          margin: 30px auto;
          padding: 0 10px;
        }
      }
    }
  }
</style>
