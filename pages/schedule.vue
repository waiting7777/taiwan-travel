<template>
  <div class="main">
    <Headbar />
    <div id="schedule-modal" :class="{ active: modalActive }">
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <div id="close" @click="close">
        <i class="fas fa-times-circle"></i>
      </div>
      <div id="title">{{title}}</div>
      <div id="carousel">
        <b-carousel
          img-width="800"
          img-height="450"
          controls
          :interval="4000"
        >
          <b-carousel-slide v-for="(item, index) in carousel" :key="index"
            :caption="item.caption"
            :img-src="item.src"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div id="text">
        {{text}}
      </div>
      <div id="button">
        <a target="_blank" :href="link">看完整資訊</a>
      </div>
    </div>
    <div id="schedule">
      <!-- <div id="title-m"><img src="/images/m/title.png" /></div> -->
      <div id="circle-1-1" class="circle-static circle-o">
        喔熊<br/>組長
      </div>
      <img id="arrow-1" src="/images/arrow-right.png" alt="">
      <img id="arrow-1-m" src="/images/m/arrow-down.png" alt="">
      <div id="circle-1-2" class="circle circle-o" @click="open(0)">
        大啖<br/>美食
      </div>
      <div id="circle-1-3" class="circle circle-o" @click="open(1)">
        鐵道<br/>之旅
      </div>
      <div id="circle-1-4" class="circle circle-o" @click="open(2)">
        台灣<br/>觀巴
      </div>
      <div id="circle-1-5" class="circle circle-o" @click="open(3)">
        單車<br/>路線
      </div>
      <div id="circle-1-6" class="circle circle-o" @click="open(4)">
        尋找<br/>住宿
      </div>
      <div id="circle-2-1" class="circle-static circle-b">
        白貓<br/>帥帥
      </div>
      <img id="arrow-2" src="/images/arrow-right.png" alt="">
      <img id="arrow-2-m" src="/images/m/arrow-down.png" alt="">
      <div id="circle-2-2" class="circle circle-b" @click="open(5)">
        北部<br/>地區
      </div>
      <div id="circle-2-3" class="circle circle-b" @click="open(6)">
        中部<br/>地區
      </div>
      <div id="circle-2-4" class="circle circle-b" @click="open(7)">
        南部<br/>地區
      </div>
      <div id="circle-2-5" class="circle circle-b" @click="open(8)">
        東部<br/>地區
      </div>
      <div id="circle-2-6" class="circle circle-b" @click="open(9)">
        離島<br/>探索
      </div>
      <img id="leaf-1" src="/images/m/leaf-1.png" />
      <img id="leaf-2" src="/images/m/leaf-2.png" />
      <img id="leaf-2-2" src="/images/m/leaf-2.png" />
      <img id="leaf-3" src="/images/m/leaf-3.png" />
      <!-- <img id="cat" :class="{ active: start }" src="/images/m/cat2.png" /> -->
      <!-- <img id="oh-bear" :class="{ active: start }" src="/images/m/oh-bear.png" /> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Headbar from '~/components/Headbar.vue'
import Footer from '~/components/Footer.vue'

const carouselData = [
  {
    key: 'food',
    title: '大啖美食',
    captions: ['談起台灣美食一定不能漏掉鮮嫩多汁、皮薄肉多的小籠包。圖／聯合報系資料照', '台南擔仔麵是簡單卻回味無窮的傳統小吃。圖／聯合報系資料照', '佛跳牆是許多台灣人必吃的年菜，也是精緻飲食的代表。圖／聯合報系資料照', '炸得黃金酥脆的排骨酥，也是台灣美食代表。圖／聯合報系資料照'],
    text: '「台灣雖小，美食俱全」，這句話來形容台灣豐富的飲食生活再適合不過。小籠包、擔仔麵、滷肉飯、珍珠奶茶和各式茶飲都是為人熟知的特色美食。除了全台夜市小吃外，台北更有161家餐廳獲選入「2019年米其林指南」，這份指南含蓋多元菜色，除台菜、客家菜外，更有法國、日本、義大利等異國菜色。精緻的飲食文化讓你的味蕾記憶台灣的耐人尋味。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000106'
  },
  {
    key: 'railway',
    title: '鐵道之旅',
    captions: ['平溪支線鐵道沿線每個小站都帶有著濃濃古意。圖／台灣觀光局提供', '縱貫台灣西部重要城市的高鐵讓旅客在短時間內往返各大城市。圖／聯合報系資料照', '搭阿里山小火車是遊客必玩體驗。圖／聯合報系資料照'],
    text: '台灣的鐵道系統完善，遍布各地區，除了火車外，西部更有高鐵讓你可節省寶貴交通時間。火車支線更是風情萬種，如台北的平溪線、新竹的內灣線、南投集集線、嘉義阿里山小火車等沿途風光景致明媚，想要細細品味台灣之美，又不想被不熟的路況、壅塞的車陣所困擾的遊客，鐵道旅行是你最好的體驗方式，沿途的海景、山色、田園、小鎮風光都令人難忘。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0011550'
  },
  {
    key: 'bus',
    title: '台灣觀巴',
    captions: ['濱海公路旁的南雅奇岩，有「霜淇淋」「竹筍」般鬼斧神工的風化砂岩。圖／聯合報系資料照', '新北瑞芳鼻頭角步道，不只可坐擁群山海景，還有一座浪漫白燈塔。圖／聯合報系資料照', '九份老街最熱門的阿妹茶樓。圖／聯合報系資料照', '雪霸國家公園觀霧遊憩區，終年雲霧繚繞，有多條步道，可以近距離欣賞高山生態。圖／聯合報系資料照'],
    text: '不想自己開車，除了搭乘大眾運輸外，你還想要享受專人導覽、解說？「台灣觀巴」的旅遊行程會是你最佳的選擇！「台灣觀巴」有全台八十幾種主題行程，包括東北角海岸線、雪霸國家公園觀霧、溫泉泡湯、龜山島賞豚等行程，囊括全台熱門旅遊路線。每個行程只要一張票搞定全程交通、導覽解說和保險，可悠然欣賞沿途風光，且是天天出發的固定行程。',
    link : 'https://www.taiwan.net.tw/m1.aspx?sNo=0001041'
  },
  {
    key: 'bike',
    title: '單車路線',
    captions: ['合歡山是海內外單車客熱愛的台灣單車路線之一。圖／聯合報系資料照', '騎著單車在花蓮縣玉里鎮一片綠油油的稻田體驗風光，也是小鎮漫遊的好選擇。圖／聯合報系資料照', '騎在花東海岸線上，沿途的美景是單車族最好的鼓勵。圖／聯合報系資料照', '七星潭自行車專用道，沿途可儘情欣賞美麗的山海風光。圖／聯合報系資料照'],
    text: '單車環島是台灣熱門的深度旅遊方式，台灣擁有絕佳的地理特色，在環島行程中，可見城市地貌、鄉野風光、崎嶇山路，更有壯闊的斷崖、海景。完善的「環島1號線」單車路線，以及補給站沿途提供車手協助。近年來許多熱愛戶外運動的觀光客慕名而來，日月潭自行車道更名列全球10大最美自行車道，環潭乘騎約30公里，可飽覽湖光山景。',
    link: 'https://itaiwanbike.iot.gov.tw/'
  },
  {
    key: 'travel',
    title: '尋找住宿',
    captions: ['台灣民宿多元，靜謐特色的民宿也深受喜愛。圖／IG@yiichen77提供', '台南有許多老屋改造的住宅空間，能讓旅客體驗道地生活文化。圖／聯合報系資料照', '台灣有許多地區都有溫泉住宿，深受愛泡湯的旅客愛戴。圖／IG@yiichen77提供', '入住風格不同的民宿也是遊台灣的樂趣之一。圖／IG@yiichen77提供'],
    text: '好好睡一覺是旅行不可或缺的一環，在台灣你有許多頂級的星級飯店可選擇，在城市你可從飯店房間綜觀城市風光，在風景區，一拉開窗簾美景就在眼前。除了飯店，全台都有獨具特色的民宿可以體驗，透過與民宿主人的互動你會有意想不到的收穫。透過台灣觀光局住宿快搜及台灣旅宿網，讓旅客快速找到適合需求且安全、安心的住宿選擇。',
    link : 'https://taiwanstay.net.tw/tourism_web/index.php'
  },
  {
    key: 'north',
    title: '北部地區',
    captions: ['台北101是全台最高樓，從象山親山步道可看到101大樓一帶的景致。圖／聯合報系資料照', '台北故宮有豐富的館藏，熱愛藝術的旅客不容錯過。圖／聯合報系資料照', '桃園市大溪老街街景。圖／聯合報系資料照', '每年夏天宜蘭冬山河親水公園都會舉辦「宜蘭童玩節」。圖／聯合報系資料照'],
    text: '台灣首都台北就座落在北部，旅客可於台北101─全台最高樓，在這裡旅客可俯瞰首都景致，也可前往故宮博物院一窺歷史典藏文物瑰寶；或走進新北市的知名老街如：九份、淡水、鶯歌、三峽等感受古街風情；或體驗基隆市的漁港風情。位於台灣東北角的宜蘭有超過千年的棲蘭神木園，蘇澳可泡冷泉放鬆身心。而新竹的舊城亦展現迷人的風貌，桃園大溪老街的歷史街屋及拉拉山、慈湖等景點都相當適合安排一日遊。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000501'
  },
  {
    key: 'middle',
    title: '中部地區',
    captions: ['台中高美濕地成排的風力發電機、夕陽與旅客交織成一幅美景。圖／聯合報系資料照', '彰化縣芳苑鄉王功漁港。圖／台灣觀光局提供', '日月潭萬人泳度活動是每年日月潭最熱血的戶外活動。圖／聯合報系資料照'],
    text: '中部包括苗栗縣、台中市、彰化縣、南投縣及雲林縣等5個縣市，台中高美濕地的絕佳夕陽景觀和逢甲特色商圈可同時滿足體驗自然與逛街購物。如果你熱愛文藝，那便不可錯過苗栗的木雕與燒陶藝術。彰化的鹿港老街的舊街紅磚道，如同走進時空隧道，而王功漁港的漁業與濕地生態極具特色。雲林縣是揚名世界的布袋戲演藝文化發源地，值得深入欣賞。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000502'
  },
  {
    key: 'south',
    title: '南部地區',
    captions: ['高雄愛河有愛之船遊輪，讓民眾從水上欣賞沿岸風光。圖／聯合報系資料照', '嘉義阿里山的日出與雲海總是吸引眾多旅客起個大早等待美景。圖／台灣觀光局提供', '台江國家公園的四草綠色隧道河景與生態，可搭竹筏瀏覽沿岸風光。圖／聯合報系資料照', '鵝鑾鼻燈塔，光力可達近50公里，被封為「東亞之光」。圖／聯合報系資料照'],
    text: '台灣南部氣候四季如夏。台南是全台歷史最悠久的文化古都，嘉義阿里山森林遊樂區雲海、高山森林鐵路及林間古道是必遊體驗。海港之都高雄除了愛河、壽山、西子灣、蓮池潭等景點外，還有佛教勝地佛光山可參訪。位處國境之南的屏東墾丁，除了碧海藍天外，墾丁國家公園內的自然生態也是旅遊首選。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000503'
  },
  {
    key: 'east',
    title: '東部地區',
    captions: ['鹿野高台熱氣球連續獲選為台東TOP10朝聖景點之一。圖／聯合報系資料照', '花蓮太魯閣最典型的山川景觀。圖／聯合報系資料照', '鹿野高台冉冉升起的熱氣球吸引許多旅客。圖／聯合報系資料照'],
    text: '東部包含花蓮縣及台東縣，東臨浩瀚太平洋，西倚中央山脈，坐擁臨山面海的美景。花東縱谷的美你一定要親身體驗，太魯閣國家公園以峽谷景觀聞名，大自然的鬼斧神工令人讚嘆。每年在台東鹿野高台的國際熱氣球嘉年華是不容錯過的國際級活動。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000504'
  },
  {
    key: 'island',
    title: '離島探索',
    captions: ['澎湖七美的雙心石滬名揚國際。圖／聯合報系資料照', '澎湖列島是台灣三大火山群之一，海蝕及其他地形作用的影響，形成許多高低起伏、變化多端的柱狀玄武岩。圖／台灣觀光局', '馬祖芹壁聚落。圖／聯合報系資料照', '金門古厝以閩南建築風格為主，大都建在山坳谷間，房屋大小不一，隨地勢錯綜林立。圖／聯合報系資料照'],
    text: '你知道台灣除了本島以外，還有許多有趣好玩的離島嗎？澎湖、金門與馬祖都屬離島地區，澎湖群島遍布玄武岩地質景觀，大自然鬼斧神工的多樣雕琢，有「上帝的石雕公園」的美稱。碧海藍天的沙灘、古厝及春夏花火節的燦爛煙火值得體驗。金門與馬祖都曾是歷史上重要的軍事之地，金門三寶「鋼刀、貢糖、高粱酒」及馬祖的老酒與海鮮不容錯過。',
    link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000505'
  }
]

export default {
  data: () => {
    return {
      start: false,
      modalActive: false,
      title: '',
      link: 'https://www.taiwan.net.tw/m1.aspx?sNo=0000106',
      text: '「台灣雖小，美食俱全」，這句話來形容台灣豐富的飲食生活再適合不過。小籠包、擔仔麵、滷肉飯、珍珠奶茶和各式茶飲都是為人熟知的特色美食。除了全台夜市小吃外，台北更有161家餐廳獲選入「2019年米其林指南」，這份指南含蓋多元菜色，除台菜、客家菜外，更有法國、日本、義大利等異國菜色。精緻的飲食文化讓你的味蕾記憶台灣的耐人尋味',
      carousel: [
        {
          src: '/images/north-1.jpg',
          caption: '台北101是全台最高樓，從象山親山步道可看到101大樓一帶的景致。圖／聯合報系資料照'
        },
        {
          src: '/images/north-2.jpg',
          caption: '台北故宮有豐富的館藏，熱愛藝術的旅客不容錯過。圖／聯合報系資料照'
        },
        {
          src: '/images/north-3.jpg',
          caption: '桃園市大溪老街街景。圖／聯合報系資料照'
        },
        {
          src: '/images/north-4.jpg',
          caption: '每年夏天宜蘭冬山河親水公園都會舉辦「宜蘭童玩節」。圖／聯合報系資料照'
        }
      ]
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.start = true;
    }, 500)
  },
  methods: {
    close: function() {
      this.modalActive = false;
      document.body.classList.remove('lock')
    },
    open: function(seq) {
      this.link = carouselData[seq].link;
      this.text = carouselData[seq].text;
      this.title = carouselData[seq].title;
      this.carousel = [];
      for (let i = 0; i < carouselData[seq].captions.length; i++) {
        this.carousel[i] = {};
        this.carousel[i].src = `/images/${carouselData[seq].key}-${i+1}.jpg`
        this.carousel[i].caption = carouselData[seq].captions[i]
      }
      this.modalActive = true;
      document.body.classList.add('lock')
    }
  },
  components: {
    Headbar, Footer
  }
}
</script>

<style lang="scss" scoped>
  $top1: calc(50% + 95px);
  $top2: calc(50% + 380px);
  $left1: calc(5% + 200px);
  $left2: calc(5% + 390px);
  $left3: calc(5% + 550px);
  $left4: calc(5% + 710px);
  $left5: calc(5% + 870px);
  $left6: calc(5% + 1030px);
  $top1m: 550px;
  $top2m: 660px;
  $top3m: 750px;
  $top4m: 840px;
  $top5m: 930px;
  $top6m: 1020px;

  .main {
    position: relative;
    overflow-x: hidden;

    #schedule-modal.active {
      transform: translate(0, 0);
    }

    #schedule-modal {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      background-image: url('/images/train-modal.png');
      background-position: center;
      display: flex;
      align-items: center;
      padding: 40px 0;
      flex-direction: column;
      transition: all 0.7s ease;
      transform: translate(100%, 0);
      position: fixed;
      height: 100vh;
      overflow-y: scroll;

      #close {
        position: absolute;
        top: 20px;
        right: 60px;
        cursor: pointer;
        font-size: 36px;

        @media screen and (max-width: 1023px) {
          right: 20px;
        }
      }

      #carousel {
        width: 800px;
        margin: 20px auto 40px auto;

        @media screen and (max-width: 1023px) {
          width: 85%;
          margin: 15px auto;
        }
      }

      #title {
        font-weight: bold;
        font-size: 24px;
        margin-top: 40px;

        @media screen and (max-width: 1023px) {
          margin-top: 15px;
          font-size: 22px;
        }
      }

      #text {
        width: 968px;

        @media screen and (max-width: 1023px) {
          width: 85%;
          font-size: 14px;
        }
      }

      #button {
        background: #5b0f00;
        padding: 5px 20px;
        border-radius: 10px;
        box-shadow: 2px 2px 1px rgba(0, 0, 0, 1);
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin-top: 30px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }

      #button:hover {
        transform: translate(1px, 1px);
      }
    }

    #schedule {
      width: 1280px;
      height: 1407px;
      margin: 0 auto;
      position: relative;
      background-image: url('/images/train.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media screen and (max-width: 1023px) {
        background-image: url('/images/m/train.jpeg');
        background-position: top;
        width: 100%;
        height: 1129px;
      }

      #bg {
        width: 100%;
      }

      #title-m {
        text-align: center;
        display: none;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #oh-bear {
        position: absolute;
        top: 178px;
        left: 50%;
        transition: all 0.7s ease;
        transform: scale(1, 0);
        transform-origin: bottom;
        display: none;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #oh-bear.active {
        transform: scale(1, 1);
      }

      #cat {
        position: absolute;
        top: 359px;
        right: -45px;
        transition: all 0.7s ease;
        transform: translate(100%, 0);
        display: none;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #cat.active {
        transform: translate(0, 0);
      }

      #leaf-1 {
        position: absolute;
        bottom: -11px;
        left: 50%;
        margin-left: -13px;
        display: none;
        z-index: 5;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #leaf-3 {
        position: absolute;
        bottom: -15px;
        left: 5px;
        display: none;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #leaf-2 {
        position: absolute;
        bottom: -13px;
        right: 3px;
        display: none;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #leaf-2-2 {
        position: absolute;
        bottom: -13px;
        left: 50%;
        margin-left: -49px;
        z-index: 1;
        display: none;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      .circle {
        cursor: pointer;
        width: 158px;
        height: 168px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 32px;
        font-weight: bold;

        @media screen and (max-width: 1023px) {
          width: 86px;
          height: 81px;
          font-size: 18px;
        }
      }

      .circle-static {
        width: 158px;
        height: 168px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 32px;
        font-weight: bold;

        @media screen and (max-width: 1023px) {
          width: 86px;
          height: 81px;
          font-size: 18px;
        }
      }

      .circle-o {
        background-image: url('/images/orange-circle.png');

        @media screen and (max-width: 1023px) {
          background-image: url('/images/m/orange-circle.png');
        }
      }

      .circle-b {
        background-image: url('/images/blue-circle.png');

        @media screen and (max-width: 1023px) {
          background-image: url('/images/m/blue-circle.png');
        }
      }

      .circle:hover {
        transform: translate(1px, 1px);
      }

      #circle-1-1 {
        position: absolute;
        top: $top1;
        left: $left1;

        @media screen and (max-width: 1023px) {
          top: $top1m;
          left: 50%;
          margin-left: 40px;
        }
      }

      #arrow-1 {
        position: absolute;
        top: calc(50% + 150px);
        left: calc(5% + 350px);

        @media screen and (max-width: 1023px) {
          display: none;
        }
      }

      #arrow-1-m {
        display: none;
        position: absolute;
        top: 625px;
        left: 50%;
        margin-left: -100px;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #circle-1-2 {
        position: absolute;
        top: $top1;
        left: $left2;

        @media screen and (max-width: 1023px) {
          top: $top2m;
          left: 50%;
          margin-left: 40px;
        }
      }

      #circle-1-3 {
        position: absolute;
        top: $top1;
        left: $left3;

        @media screen and (max-width: 1023px) {
          top: $top3m;
          left: 50%;
          margin-left: 40px;
        }
      }

      #circle-1-4 {
        position: absolute;
        top: $top1;
        left: $left4;

        @media screen and (max-width: 1023px) {
          top: $top4m;
          left: 50%;
          margin-left: 40px;
        }
      }

      #circle-1-5 {
        position: absolute;
        top: $top1;
        left: $left5;

        @media screen and (max-width: 1023px) {
          top: $top5m;
          left: 50%;
          margin-left: 40px;
        }
      }

      #circle-1-6 {
        position: absolute;
        top: $top1;
        left: $left6;

        @media screen and (max-width: 1023px) {
          top: $top6m;
          left: 50%;
          margin-left: 40px;
        }
      }

      #circle-2-1 {
        position: absolute;
        top: $top2;
        left: $left1;

        @media screen and (max-width: 1023px) {
          top: $top1m;
          left: 50%;
          margin-left: -120px;
        }
      }

      #arrow-2 {
        position: absolute;
        top: calc(50% + 435px);
        left: calc(5% + 350px);

        @media screen and (max-width: 1023px) {
          display: none;
        }
      }

      #arrow-2-m {
        display: none;
        position: absolute;
        top: 625px;
        left: 50%;
        margin-left: 60px;

        @media screen and (max-width: 1023px) {
          display: block;
        }
      }

      #circle-2-2 {
        position: absolute;
        top: $top2;
        left: $left2;

        @media screen and (max-width: 1023px) {
          top: $top2m;
          left: 50%;
          margin-left: -120px;
        }
      }

      #circle-2-3 {
        position: absolute;
        top: $top2;
        left: $left3;

        @media screen and (max-width: 1023px) {
          top: $top3m;
          left: 50%;
          margin-left: -120px;
        }
      }

      #circle-2-4 {
        position: absolute;
        top: $top2;
        left: $left4;

        @media screen and (max-width: 1023px) {
          top: $top4m;
          left: 50%;
          margin-left: -120px;
        }
      }

      #circle-2-5 {
        position: absolute;
        top: $top2;
        left: $left5;

        @media screen and (max-width: 1023px) {
          top: $top5m;
          left: 50%;
          margin-left: -120px;
        }
      }

      #circle-2-6 {
        position: absolute;
        top: $top2;
        left: $left6;

        @media screen and (max-width: 1023px) {
          top: $top6m;
          left: 50%;
          margin-left: -120px;
        }
      }
    }
  }
</style>
