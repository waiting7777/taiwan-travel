import Phaser from 'phaser'
import _ from 'lodash'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super()
  }

  init() {
    this._fontStyle = {
      fontSize: '24px',
      color: '#000',
      fontFamily: 'Microsoft JhengHei'
    }
    this.modalLock = false;
    this.modalContent = {
      taipei: {
        title: '台北 101',
        text: 'TAIPEI 101座落於台北最精華地段，除了是台灣首都地標外，每年跨年施放的煙火更成為亞洲代表之一。標高382公尺的89樓觀景台，除擁有全方位絕佳的觀景視野外，並提供其他多項設施，同時更可看到世界最大、最重、也是唯一外露供參觀的風阻尼器。'
      },
      taoyuan: {
        title: '桃園大溪老街',
        text: '大溪老街是台灣重要的歷史街區，不僅規模大，建築外觀與牌樓立面也保留得相當完整，主要範圍為和平路、中山路、中央路三條歷史街區。平常住家主要以紅磚牌樓立面搭配紅磚屋，商家則以石材精雕歐洲風格的拱門樑柱和繁複華麗的浮雕圖案，呈現出以巴洛克風情為主的立面牌樓。'
      },
      miaoli: {
        title: '苗栗三義木雕',
        text: '「桐花」、「木雕」、「溫泉」、「水果」、「陶瓷」及「客家菜」是苗栗觀光的6大特色，苗栗非常適合規畫2~3天的小旅行。三義木雕博物館中的大型原住民木雕享譽海內外。每年4、5月油桐花海盛開，雪白的桐花開滿山頭，吸引大批賞花客。'
      },
      taichung: {
        title: '台中大甲媽祖',
        text: '大甲鎮瀾宮媽祖繞境進香相傳已有數百年的歷史，相傳鎮瀾宮是清雍正8年（西元1730年）自湄洲天后祖廟恭請媽祖神像來台。每年農曆3月初「遶境進香」場面浩大，許多民眾跟隨遶境隊伍走完全程，各地廟宇均有迎媽祖的慶祝活動。'
      },
      nantou: {
        title: '南投日月潭',
        text: '日月潭面積827公頃，湖面周圍約33公里，北半部形如日輪，南半部形如月鉤，故而得名。在日月潭你可以搭船遊湖，也能騎單車環湖。每年「泳渡日月潭」與「環湖馬拉松賽」也讓日月潭除了美景，更多了活力。'
      },
      tainan: {
        title: '台南赤崁樓',
        text: '台南市是全台歷史最悠久的城市。鄭成功驅逐荷蘭人後，在臺南開府設治。至1683年，清國平臺，在臺南設臺灣府，為全臺首府。重要古蹟有赤崁樓、安平古堡、億載金城等古蹟。但來到台南除了歷史之旅，美食更是少不了的行程，建議您帶著足夠的肚量才能多裝幾份回味無窮的台灣小吃。'
      },
      kaohsiung: {
        title: '高雄佛光山',
        text: '高雄是充滿活力陽光的海港城市，除了愛河、壽山、西子灣、蓮池潭、旗津、左營舊城等知名景點外，位於大樹鄉的佛光山更是不可錯過的景點。最具特色的大佛城是主要地標。每年農曆春節到元宵期間，佛光山的花燈活動都吸引大批民眾。'
      },
      pingtung: {
        title: '屏東東港',
        text: '東隆宮是東港重要的象徵，當地人稱它「王爺廟」，主祀溫府千歲，是每三年舉辦一次的「迎王平安祭」主廟。平安祭原始用意為送瘟神出海，約在農曆9月舉行，除廟會活動外，最後一天的燒王船儀式更是整個祭典的高潮。'
      },
      taitung: {
        title: '台東鹿野高台',
        text: '鹿野高台擁有絕佳視野，能一覽整個高台地區與卑南溪谷底的田野景色，也是台灣東部優良的天然空域活動場地。每年6月至8月時都會有「國際熱氣球嘉年華」，正是體驗熱氣球的大好時機。除了熱氣球繫留體驗，還有熱氣球自由飛行表演、絢麗燦爛的光雕音樂會等活動。'
      },
      hualien: {
        title: '花蓮太魯閣',
        text: '太魯閣國家公園以雄偉壯麗、幾近垂直的大理岩峽谷景觀聞名。沿著立霧溪的峽谷風景線而行，觸目所及皆是壁立千仞的峭壁、斷崖、峽谷、連綿曲折的山洞隧道、大理岩層和溪流等風光。燕子口和九曲洞，是太魯閣峽谷最讓人心動的自然奇觀，也是峽谷最窄的兩段，臨溪側闢有人行步道供遊客漫步欣賞。'
      },
      ilan: {
        title: '宜蘭頭城龜山島',
        text: '龜山島位在宜蘭縣頭城鎮海岸以東約10公里處，孤懸於海中之火山島嶼，也是一座活火山，因其型似浮龜而得名。龜山島最有趣的活動就屬每年3~10月賞鯨行程。在這裡最常看到的就是飛旋海豚，這類海豚非常活潑，常逗得遊客驚呼連連。'
      }
    }
  }

  preload() {
    // load assets
    this.load.image('bg-0', '/images/bg-0.png')
    this.load.image('bg', '/images/bg.png');
    this.load.image('arrow-down', '/images/arrow-down.png')
    this.load.image('taiwan', '/images/taiwan.png')
    this.load.image('oh-bear', '/images/oh-bear.png')
    this.load.image('taipei', '/images/taipei.png')
    this.load.image('taoyuan', '/images/taoyuan.png')
    this.load.image('taichung', '/images/taichung.png')
    this.load.image('miaoli', '/images/miaoli.png')
    this.load.image('nantou', '/images/nantou.png')
    this.load.image('tainan', '/images/tainan.png')
    this.load.image('kaohsiung', '/images/kaohsiung.png')
    this.load.image('pingtung', '/images/pingtung.png')
    this.load.image('ilan', '/images/ilan.png')
    this.load.image('taitung', '/images/taitung.png')
    this.load.image('hualien', '/images/hualien.png')
    this.load.image('point', '/images/point.png')

    this.load.spritesheet('score', '/images/score.png', { frameWidth: 322, frameHeight: 433 });
    this.load.spritesheet('cat', '/images/cat.png', { frameWidth: 579, frameHeight: 433 });
    this.load.spritesheet('cat2', '/images/cat2.png', { frameWidth: 320, frameHeight: 300 })
  }
  
  create() {
    let scaleX = this.cameras.main.width / 1280
    let scaleY = this.cameras.main.height / 675
    let scale = Math.max(scaleX, scaleY)

    // create first group
    this.firstGroup = this.add.group()

    // add bg 0
    this.bg0 = this.add.image(0, 0, 'bg-0').setOrigin(0).setDepth(-1)
    this.bg0.setScale(scale).setScrollFactor(0)

    // add cat
    let catAnim = this.anims.create({
      key: 'catWalk',
      frames: this.anims.generateFrameNumbers('cat'),
      frameRate: 3,
      repeat: -1
    });
    this.cat = this.add.sprite(720, 410, 'cat').setScale(0.9)
    this.cat.anims.play('catWalk')

    // add cat2
    let catAnim2 = this.anims.create({
      key: 'catWalk2',
      frames: this.anims.generateFrameNumbers('cat2'),
      frameRate: 3,
      repeat: -1
    });
    this.cat2 = this.add.sprite(1110, 420, 'cat2').setScale(0.9)
    this.cat2.anims.play('catWalk2')

    // add welcome text
    this.welcome1 = this.add.text(350, 200, 'Hi~歡迎來到', this._fontStyle)
    this.welcome2 = this.add.text(340, 230, '台灣好好玩', { fontSize: '32px', fontWeight: 'bold', color: '#000', fontFamily: 'Microsoft JhengHei' })
    this.welcome3 = this.add.text(335, 270, '景點尋寶積分賽', this._fontStyle)
    this.firstGroup.add(this.welcome1);
    this.firstGroup.add(this.welcome2);
    this.firstGroup.add(this.welcome3);

    // add arrow down button
    this.arrowButton = this.add.image(650, 625, 'arrow-down').setInteractive({ useHandCursor: true  }).setOrigin(0.5)
    this.firstGroup.add(this.arrowButton);
    // event listener for the background
    this.arrowButton.on('pointerdown', this.nextPage, this);

    // add bg
    this.bg = this.add.image(0, 0, 'bg').setOrigin(0).setDepth(-1).setAlpha(0)
    this.bg.setScale(scale).setScrollFactor(0)

    // create first group
    this.mainGroup = this.add.group()
    this.pointGroup = this.add.group()

    // add taiwan
    this.taiwan = this.add.image(650, 350, 'taiwan').setName('taiwan')
    this.taipei = this.add.image(732, 85, 'taipei').setName('taipei')
    this.taipeiPoint = this.add.image(760, 75, 'point').setName('taipei')
    this.taoyuan = this.add.image(595, 90, 'taoyuan').setName('taoyuan')
    this.taoyuanPoint = this.add.image(670, 92, 'point').setName('taoyuan')
    this.miaoli = this.add.image(700, 200, 'miaoli').setName('miaoli')
    this.miaoliPoint = this.add.image(640, 165, 'point').setName('miaoli')
    this.taichung = this.add.image(545, 200, 'taichung').setName('taichung')
    this.taichungPoint = this.add.image(595, 205, 'point').setName('taichung')
    this.nantou = this.add.image(650, 290, 'nantou').setName('nantou')
    this.nantouPoint = this.add.image(640, 245, 'point').setName('nantou')
    this.tainan = this.add.image(440, 370, 'tainan').setName('tainan')
    this.tainanPoint = this.add.image(510, 405, 'point').setName('tainan')
    this.kaohsiung = this.add.image(590, 430, 'kaohsiung').setName('kaohsiung')
    this.kaohsiungPoint = this.add.image(505, 465, 'point').setName('kaohsiung')
    this.pingtung = this.add.image(505, 560, 'pingtung').setName('pingtung')
    this.pingtungPoint = this.add.image(575, 540, 'point').setName('pingtung')
    this.ilan = this.add.image(905, 155, 'ilan').setName('ilan')
    this.ilanPoint = this.add.image(825, 115, 'point').setName('ilan')
    this.hualien = this.add.image(800, 290, 'hualien').setName('hualien')
    this.hualienPoint = this.add.image(765, 235, 'point').setName('hualien')
    this.taitung = this.add.image(760, 490, 'taitung').setName('taitung')
    this.taitungPoint = this.add.image(675, 465, 'point').setName('taitung')

    this.mainGroup.addMultiple([this.taiwan, this.taipei, this.taoyuan, this.miaoli, this.taichung, this.nantou,
                                this.tainan, this.kaohsiung, this.pingtung, this.ilan, this.hualien, this.taitung])

    this.pointGroup.addMultiple([this.taipeiPoint, this.taoyuanPoint, this.miaoliPoint, this.taichungPoint,
                                this.nantouPoint, this.tainanPoint, this.kaohsiungPoint, this.pingtungPoint,
                                this.ilanPoint, this.hualienPoint, this.taitungPoint])

    for (let i in this.pointGroup.children.entries) {
      this.pointGroup.children.entries[i].setInteractive({
        useHandCursor: true
      })
      let that = this
      this.pointGroup.children.entries[i].on('pointerover', function(pointer) {
        if (!that.modalLock) {
          this.setScale(1.2)
          let name = this.name
          let target = _.find(that.mainGroup.children.entries, function(o){ return o.name === name})
          target.setScale(1.2)
        }       
      })
      this.pointGroup.children.entries[i].on('pointerout', function(pointer) {
        this.setScale(1)
        let name = this.name
        let target = _.find(that.mainGroup.children.entries, function(o){ return o.name === name})
        target.setScale(1)
      })
      this.pointGroup.children.entries[i].on('pointerdown', function(pointer) {
        if (!that.modalLock) {
          that.modalLock = true       
          that.elementTween.play()
          that.changeModalContent(this.name)
        }
      })
    }

    for (let i in this.mainGroup.children.entries) {
      if (this.mainGroup.children.entries[i].name !== 'taiwan') {
        this.mainGroup.children.entries[i].setInteractive({
          useHandCursor: true
        })
        let that = this
        this.mainGroup.children.entries[i].on('pointerover', function(pointer) {
          if (!that.modalLock) {
            this.setScale(1.2)
            let name = this.name
            let target = _.find(that.pointGroup.children.entries, function(o){ return o.name === name})
            target.setScale(1.2)
          }         
        })
        this.mainGroup.children.entries[i].on('pointerout', function(pointer) {
          this.setScale(1)
          let name = this.name
          let target = _.find(that.pointGroup.children.entries, function(o){ return o.name === name})
          target.setScale(1)
        })
        this.mainGroup.children.entries[i].on('pointerdown', function(pointer) {
          if (!that.modalLock) {
            that.modalLock = true       
            that.elementTween.play()
            that.changeModalContent(this.name)
          }
        })
      }
    }

    // add oh bear
    this.ohBear = this.add.image(-200, 450, 'oh-bear').setAngle(-45)

    // add score
    let scoreAnim = this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('score'),
      frameRate: 3,
      repeat: -1
    });
    this.score = this.add.sprite(1100, 460, 'score')
    this.score.anims.play('walk')
    this.mainGroup.add(this.score)

    this.mainGroup.toggleVisible()
    this.pointGroup.toggleVisible()

    var div = document.createElement('div');
    div.id = 'modal'
    this.modalHead = document.createElement('div')
    this.modalHead.id = 'modal-head'
    this.modalHead.innerText = '台北 101'
    this.modalImage = document.createElement('img')
    this.modalImage.id ='modal-image'
    this.modalImage.src = '/images/taipei.jpg'
    this.modalText = document.createElement('div')
    this.modalText.id = 'modal-text'
    this.modalText.innerText = 'TAIPEI 101座落於台北最精華地段，除了是台灣首都地標外，每年跨年施放的煙火更成為亞洲代表之一。標高382公尺的89樓觀景台，除擁有全方位絕佳的觀景視野外，並提供其他多項設施，同時更可看到世界最大、最重、也是唯一外露供參觀的風阻尼器。'
    this.modalButton = document.createElement('div')
    this.modalButton.id ="modal-button"
    this.modalButton.innerText = '繼續闖關'
    div.appendChild(this.modalHead)
    div.appendChild(this.modalImage)
    div.appendChild(this.modalText)
    div.appendChild(this.modalButton)

    this.element = this.add.dom(375, 50, div).setOrigin(0).setScale(0, 1)
    this.element.setAlpha(0)

    this.elementTween = this.tweens.add({
      targets: this.element,
      duration: 400,
      scaleX: 1,
      alpha: 1,
      paused: true
    })

    this.modalButton.addEventListener('click', (e) => {
      this.element.setAlpha(0)
      this.modalLock = false
    })

    this.cameras.main.once('camerafadeoutcomplete', function(camera) {
      this.firstGroup.toggleVisible()
      this.mainGroup.toggleVisible()
      this.pointGroup.toggleVisible()
      this.bg.setAlpha(1)
      this.tweens.add({
        targets: this.ohBear,
        duration: 800,
        x: 180,
        angle: 0,
        pause: false,
      })
      camera.fadeIn(800, 149, 188, 194)
    }, this)
  }

  update() {

  }

  changeModalContent(name) {
    this.modalHead.innerText = this.modalContent[name].title
    this.modalImage.src = `/images/${name}.jpg`
    this.modalText.innerText = this.modalContent[name].text
  }

  nextPage() {
    this.cameras.main.fadeOut(800, 149, 188, 194)
    this.tweens.add({
      targets: this.cat,
      duration: 800,
      x: -100,
      alpha: 0,
      pause: false,
    })
    this.tweens.add({
      targets: this.cat2,
      duration: 800,
      x: 290,
      alpha: 0,
      pause: false,
    })
  }
}