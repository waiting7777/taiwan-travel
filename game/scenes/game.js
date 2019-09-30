import Phaser from 'phaser'
import _ from 'lodash'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super()
  }

  init() {
    if (window.innerWidth < 1024) {
      this._fontStyle = {
        color: '#000',
        font: 'bold 16px 微軟正黑體',
        lineSpacing: 8
      }
    } else {
      this._fontStyle = {
        color: '#000',
        font: 'bold 24px 微軟正黑體',
        lineSpacing: 8
      }
    }
    
    this.questContain = null;
    this.end = false;
    this.mobileTipOpen = false;
    this.rewardArray = [];
    this.rewardCounter = 0;
    this.rewardPosition = {
      x: 140,
      y: 32
    }
    this.scoreTable = [13, 14, 16, 18, 19, 20]
    this.scoreNumber = 0;
    this.currentModal = ''
    if (window.innerWidth < 1024) {
      this.welcomeText = '參加台灣好好玩\n尋寶活動抽機票'
      this.welcomeText2 = '點下方「開始」\n立刻尋寶去！'
    } else {
      this.welcomeText = 'Hi歡迎來到 台灣好好玩 景點尋寶積分活動'
      this.welcomeText2 = '在台灣地圖完成11景點 尋寶，就能參加 「紐約-台北來回機票」 抽獎！點下方「開始」！'
    }
    this.tipChangeFlag = false;
    this.modalLock = false;
    this.modalContent = {
      taipei: {
        title: '台北 101',
        text: 'TAIPEI 101座落於台北最精華地段，除了是台灣首都地標外，每年跨年施放的煙火更成為亞洲代表之一。標高382公尺的89樓觀景台，除擁有全方位絕佳的觀景視野外，並提供其他多項設施，同時更可看到世界最大、最重、也是唯一外露供參觀的風阻尼器。',
        click: false,
        x: 750, y: 100,
        xm: 250, ym: 100
      },
      taoyuan: {
        title: '桃園大溪老街',
        text: '大溪老街是台灣重要的歷史街區，不僅規模大，建築外觀與牌樓立面也保留得相當完整，主要範圍為和平路、中山路、中央路三條歷史街區。平常住家主要以紅磚牌樓立面搭配紅磚屋，商家則以石材精雕歐洲風格的拱門樑柱和繁複華麗的浮雕圖案，呈現出以巴洛克風情為主的立面牌樓。',
        click: false,
        x: 620, y: 100,
        xm: 180, ym: 100
      },
      miaoli: {
        title: '苗栗三義木雕',
        text: '「桐花」、「木雕」、「溫泉」、「水果」、「陶瓷」及「客家菜」是苗栗觀光的6大特色，苗栗非常適合規畫2~3天的小旅行。三義木雕博物館中的大型原住民木雕享譽海內外。每年4、5月油桐花海盛開，雪白的桐花開滿山頭，吸引大批賞花客。',
        click: false,
        x: 670, y: 210,
        xm: 190, ym: 160
      },
      taichung: {
        title: '台中站',
        text: ['鎮瀾宮的大甲媽祖送上平安符勳章，讓你生活順心順利！', '行經台中一定要到大甲鎮瀾宮祈福，拜拜讓旅程祈求一切順利。'],
        click: false
      },
      nantou: {
        title: '南投日月潭',
        text: '日月潭面積827公頃，湖面周圍約33公里，北半部形如日輪，南半部形如月鉤，故而得名。在日月潭你可以搭船遊湖，也能騎單車環湖。每年「泳渡日月潭」與「環湖馬拉松賽」也讓日月潭除了美景，更多了活力。',
        click: false,
        x: 660, y: 280,
        xm: 170, ym: 250
      },
      tainan: {
        title: '台南站',
        text: ['恭喜獲得吃貨認證！吃碗擔仔麵，充電再出發！', '來到台南怎麼可以錯過道地小吃呢！來碗香噴噴魯肉飯！'],
        click: false
      },
      kaohsiung: {
        title: '高雄佛光山',
        text: '高雄是充滿活力陽光的海港城市，除了愛河、壽山、西子灣、蓮池潭、旗津、左營舊城等知名景點外，位於大樹鄉的佛光山更是不可錯過的景點。最具特色的大佛城是主要地標。每年農曆春節到元宵期間，佛光山的花燈活動都吸引大批民眾。',
        click: false,
        x: 550, y: 450,
        xm: 130, ym: 360
      },
      pingtung: {
        title: '屏東站',
        text: ['來點旗魚黑輪，炸得黃金酥脆口感，絕對讓你愛不釋口！', '你累了嗎？來碗熱騰騰的東港肉粿補充能量吧！'],
        click: false
      },
      taitung: {
        title: '台東鹿野高台',
        text: '鹿野高台擁有絕佳視野，能一覽整個高台地區與卑南溪谷底的田野景色，也是台灣東部優良的天然空域活動場地。每年6月至8月時都會有「國際熱氣球嘉年華」，正是體驗熱氣球的大好時機。除了熱氣球繫留體驗，還有熱氣球自由飛行表演、絢麗燦爛的光雕音樂會等活動。',
        click: false,
        x: 740, y: 490,
        xm: 250, ym: 370
      },
      hualien: {
        title: '花蓮站',
        text: ['恭喜獲台灣特有種「台灣黑熊」，陪你一起在太魯閣國家公園尋寶！', '恭喜獲台灣特有種「台灣獼猴」，陪你一起在太魯閣國家公園尋寶！'],
        click: false
      },
      ilan: {
        title: '宜蘭站',
        text: ['恭喜獲海豚勳章！搭船賞鯨豚是龜山島必做活動！', '宜蘭龜山島是體驗立槳衝浪 (SUP)的好地方！動起來吧！'],
        click: false
      }
    }
  }

  preload() {
    // load assets
    if (window.innerWidth < 1024) {
      this.load.image('bg-0', '/images/m/bg-0.png')
      this.load.image('dialog', '/images/m/dialog.png')
      this.load.image('arrow-down', '/images/m/start.png')

      this.load.spritesheet('cat', '/images/m/cat.png', { frameWidth: 333, frameHeight: 243 });
    } else {
      this.load.image('bg-0', '/images/bg-0.png')
      this.load.image('dialog', '/images/dialog.png')
      this.load.image('arrow-down', '/images/start.png')

      this.load.spritesheet('cat', '/images/cat.png', { frameWidth: 579, frameHeight: 433 });
    }
    
    this.load.image('bg', '/images/bg.png');
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
    this.load.image('point', '/images/point-gray.png')
    this.load.image('point-gray', '/images/point.png')
    this.load.image('dialog-little', '/images/dialog-little.png')
    this.load.image('cat-hand', '/images/cat-hand.png')

    this.load.image('taichung-reward-1', '/images/taichung-reward-1.png')
    this.load.image('taichung-reward-2', '/images/taichung-reward-2.png')
    this.load.image('pingtung-reward-1', '/images/pingtung-reward-1.png')
    this.load.image('pingtung-reward-2', '/images/pingtung-reward-2.png')
    this.load.image('tainan-reward-1', '/images/tainan-reward-1.png')
    this.load.image('tainan-reward-2', '/images/tainan-reward-2.png')
    this.load.image('hualien-reward-1', '/images/hualien-reward-1.png')
    this.load.image('hualien-reward-2', '/images/hualien-reward-2.png')
    this.load.image('ilan-reward-1', '/images/ilan-reward-1.png')
    this.load.image('ilan-reward-2', '/images/ilan-reward-2.png')

    this.load.spritesheet('score', '/images/score.png', { frameWidth: 287, frameHeight: 394 });
    this.load.spritesheet('cat2', '/images/cat2.png', { frameWidth: 320, frameHeight: 300 })
  }
  
  create() {
    // create first group
    this.firstGroup = this.add.group()

    // add bg 0
    this.bg0 = this.add.image(0, 0, 'bg-0').setOrigin(0).setDepth(-1)

    // add cat
    let catAnim = this.anims.create({
      key: 'catWalk',
      frames: this.anims.generateFrameNumbers('cat'),
      frameRate: 3,
      repeat: -1
    });
    if (window.innerWidth < 1024) {
      this.cat = this.add.sprite(250, 310, 'cat').setScale(0.9)
    } else {
      this.cat = this.add.sprite(720, 390, 'cat').setScale(0.9)
    }
    this.cat.anims.play('catWalk')

    // add cat2
    let catAnim2 = this.anims.create({
      key: 'catWalk2',
      frames: this.anims.generateFrameNumbers('cat2'),
      frameRate: 3,
      repeat: -1
    });
    this.cat2 = this.add.sprite(1110, 400, 'cat2').setScale(0.9)
    this.cat2.anims.play('catWalk2')

    // add dialog
    if (window.innerWidth < 1024) {
      this.dialog = this.add.image(260, 170, 'dialog').setAlpha(0)
    } else {
      this.dialog = this.add.image(360, 400, 'dialog').setAlpha(0)
    }
    this.firstGroup.add(this.dialog)
    this.tweens.add({
      targets: this.dialog,
      duration: 800,
      alpha: 1,
      pause: false,
      delay: 800,
      onCompleteScope: this,
      onComplete: function() {
        for(let i = 0; i <= this.welcomeText.length; i++) {
          setTimeout(() => {
            this.welcome.setText(this.welcomeText.substr(0, i))
            if (i === this.welcomeText.length) {
              this.tweens.add({
                targets: this.catHand,
                duration: 800,
                alpha: 1,
                pause: false,
                onCompleteScope: this,
                onComplete: function() {
                  this.welcome.setText('')
                  this.welcome.setStyle({font: 'bold 16px 微軟正黑體'})
                  this.welcome.setX(205)
                  for(let i = 0; i <= this.welcomeText2.length; i++) {
                    setTimeout(() => {
                      this.welcome.setText(this.welcomeText2.substr(0, i))
                      if (i === this.welcomeText2.length) {
                        this.tweens.add({
                          targets: [this.dialogLittle, this.dialogLittleText],
                          duration: 800,
                          alpha: 1,
                          pause: false,
                        })
                      }
                    }, i * 150)
                  }
                }
              })
            }
          }, i * 150)
        }
      }
    })

    // add dialog little
    this.dialogLittle = this.add.image(950, 355, 'dialog-little').setAlpha(0)
    this.firstGroup.add(this.dialogLittle)

    // add dialog little text
    this.dialogLittleText = this.add.text(900, 335, '還可抽\n禮卡喔！', this._fontStyle)
    this.dialogLittleText.setStyle({ font: 'bold 16px 微軟正黑體' }).setAlpha(0)
    this.firstGroup.add(this.dialogLittleText)

    // add welcome text
    if (window.innerWidth < 1024) {
      this.welcome = this.add.text(200, 146, '', this._fontStyle)
    } else {
      this.welcome = this.add.text(215, 350, '', this._fontStyle)
    }
    
    this.welcome.setWordWrapWidth(150)
    this.firstGroup.add(this.welcome)
    
    // add cat hand
    this.catHand = this.add.image(415, 375, 'cat-hand').setAlpha(0)
    this.firstGroup.add(this.catHand)

    // add arrow down button
    if (window.innerWidth < 1024) {
      this.arrowButton = this.add.image(200, 445, 'arrow-down').setInteractive({ useHandCursor: true  }).setOrigin(0.5)
    } else {
      this.arrowButton = this.add.image(650, 605, 'arrow-down').setInteractive({ useHandCursor: true  }).setOrigin(0.5)
    }
    this.firstGroup.add(this.arrowButton);
    // event listener for the background
    this.arrowButton.on('pointerdown', this.nextPage, this);

    // =========== second ==============

    // add bg
    this.bg = this.add.image(0, 0, 'bg').setOrigin(0).setDepth(-1).setAlpha(0)

    // create main group
    this.mainGroup = this.add.group()
    this.pointGroup = this.add.group()

    // add taiwan
    if (window.innerWidth < 1024) {
      this.taiwan = this.add.image(190, 280, 'taiwan').setName('taiwan').setScale(0.7)
      this.taipei = this.add.image(250, 80, 'taipei').setName('taipei').setScale(0.7)
      this.taipeiPoint = this.add.image(270, 105, 'point').setName('taipei').setScale(0.7)
      this.taoyuan = this.add.image(140, 100, 'taoyuan').setName('taoyuan').setScale(0.7)
      this.taoyuanPoint = this.add.image(200, 100, 'point').setName('taoyuan').setScale(0.7)
      this.miaoli = this.add.image(215, 170, 'miaoli').setName('miaoli').setScale(0.7)
      this.miaoliPoint = this.add.image(175, 145, 'point').setName('miaoli').setScale(0.7)
      this.taichung = this.add.image(90, 190, 'taichung').setName('taichung').setScale(0.7)
      this.taichungPoint = this.add.image(140, 185, 'point').setName('taichung').setScale(0.7)
      this.nantou = this.add.image(180, 250, 'nantou').setName('nantou').setScale(0.7)
      this.nantouPoint = this.add.image(170, 230, 'point').setName('nantou').setScale(0.7)
      this.tainan = this.add.image(50, 300, 'tainan').setName('tainan').setScale(0.7)
      this.tainanPoint = this.add.image(95, 305, 'point').setName('tainan').setScale(0.7)
      this.kaohsiung = this.add.image(140, 350, 'kaohsiung').setName('kaohsiung').setScale(0.7)
      this.kaohsiungPoint = this.add.image(90, 365, 'point').setName('kaohsiung').setScale(0.7)
      this.pingtung = this.add.image(90, 450, 'pingtung').setName('pingtung').setScale(0.7)
      this.pingtungPoint = this.add.image(130, 410, 'point').setName('pingtung').setScale(0.7)
      this.ilan = this.add.image(320, 170, 'ilan').setName('ilan').setScale(0.7)
      this.ilanPoint = this.add.image(310, 130, 'point').setName('ilan').setScale(0.7)
      this.hualien = this.add.image(300, 270, 'hualien').setName('hualien').setScale(0.7)
      this.hualienPoint = this.add.image(260, 230, 'point').setName('hualien').setScale(0.7)
      this.taitung = this.add.image(275, 375, 'taitung').setName('taitung').setScale(0.7)
      this.taitungPoint = this.add.image(210, 360, 'point').setName('taitung').setScale(0.7)
    } else {
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
    }

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
        if (that.end) {
          return
        }
        if (!that.modalLock && window.innerWidth >= 1024) {
          this.setScale(1.2)
          let name = this.name
          let target = _.find(that.mainGroup.children.entries, function(o){ return o.name === name})
          target.setScale(1.2)
        }       
      })
      this.pointGroup.children.entries[i].on('pointerout', function(pointer) {
        if (that.end) {
          return
        }
        if (window.innerWidth >= 1024) {
          this.setScale(1)
          let name = this.name
          let target = _.find(that.mainGroup.children.entries, function(o){ return o.name === name})
          target.setScale(1)
        }
      })
      this.pointGroup.children.entries[i].on('pointerdown', function(pointer) {
        if (that.end) {
          return
        }
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
          if (that.end) {
            return
          }
          if (!that.modalLock && window.innerWidth >= 1024) {
            this.setScale(1.2)
            let name = this.name
            let target = _.find(that.pointGroup.children.entries, function(o){ return o.name === name})
            target.setScale(1.2)
          }         
        })
        this.mainGroup.children.entries[i].on('pointerout', function(pointer) {
          if (that.end) {
            return
          }
          if (window.innerWidth >= 1024) {
            this.setScale(1)
            let name = this.name
            let target = _.find(that.pointGroup.children.entries, function(o){ return o.name === name})
            target.setScale(1)
          }
        })
        this.mainGroup.children.entries[i].on('pointerdown', function(pointer) {
          if (that.end) {
            return
          }
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
    if (window.innerWidth < 1024) {
      this.score = this.add.sprite(25, 45, 'score').setScale(0)
    } else {
      this.score = this.add.sprite(1100, 460, 'score')
    }
    this.score.anims.play('walk')
    this.mainGroup.add(this.score)

    // add tip text
    if (window.innerWidth < 1024) {
      this.tipText =  this.add.text(25, 45, '點按地圖上11景點\n圖開始尋寶吧！', this._fontStyle)
    } else {
      this.tipText =  this.add.text(1000, 450, '點按地圖上11景點\n圖開始尋寶吧！', this._fontStyle)
    }
    this.tipText.setWordWrapWidth(300)
    this.mainGroup.add(this.tipText)

    // add score text
    if (window.innerWidth < 1024) {
      this.scoreText = this.add.text(270, 10, '分數 0/100', this._fontStyle)
    } else {
      this.scoreText = this.add.text(1100, 20, '分數 0/100', this._fontStyle)
    }
    this.mainGroup.add(this.scoreText)

    // add score point
    if (window.innerWidth < 1024) {
      this.scorePoint = this.add.text(187.5, 600, '', this._fontStyle).setAlpha(0)
      this.scorePoint.setStyle({ font: 'bold 24px 微軟正黑體' })
    } else {
      this.scorePoint = this.add.text(500, 600, '', this._fontStyle).setAlpha(0)
      this.scorePoint.setStyle({ font: 'bold 32px 微軟正黑體' })
    }

    // add reward text
    if (window.innerWidth < 1024) {
      this.rewardText = this.add.text(10, 10, '獎勵 ', this._fontStyle)
    } else {
      this.rewardText = this.add.text(50, 20, '獎勵 ', this._fontStyle)
    }
    this.mainGroup.add(this.rewardText)

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
    this.modalButton.innerText = '繼續尋寶'
    div.appendChild(this.modalHead)
    div.appendChild(this.modalImage)
    div.appendChild(this.modalText)
    div.appendChild(this.modalButton)

    const shuffleScore = _.shuffle(this.scoreTable)
    this.modalContent['taipei'].num = shuffleScore[0]
    this.modalContent['taoyuan'].num = shuffleScore[1]
    this.modalContent['miaoli'].num = shuffleScore[2]
    this.modalContent['nantou'].num = shuffleScore[3]
    this.modalContent['kaohsiung'].num = shuffleScore[4]
    this.modalContent['taitung'].num = shuffleScore[5]

    if (window.innerWidth < 1024) {
      var questContain = document.createElement('div');
      questContain.id = 'quest-contain'
      var quest = document.createElement('i')
      quest.classList.add('fas')
      quest.classList.add('fa-question-circle')
      questContain.appendChild(quest)
      this.questContain = this.add.dom(25, 45, questContain).setAlpha(0)
      questContain.addEventListener('click', (e) => {
        if (!this.mobileTipOpen) {
          this.mobileTipOpen = true;
          this.mobileTipPlay()
        }
      });
      this.element = this.add.dom(window.innerWidth * 0.1 / 2, 50, div).setOrigin(0).setScale(0, 1)
    } else {
      this.element = this.add.dom(375, 50, div).setOrigin(0).setScale(0, 1)
    }
    this.element.setAlpha(0)

    this.elementTween = this.tweens.add({
      targets: this.element,
      duration: 400,
      scaleX: 1,
      alpha: 1,
      paused: true
    })

    this.modalButton.addEventListener('click', (e) => {
      let name = this.currentModal;
      if (name === 'taichung' || name === 'ilan' || name === 'tainan' || name === 'hualien' || name === 'pingtung') {
        if (!this.modalContent[name].click) {
          this.modalContent[name].click = true
          if (window.innerWidth < 1024) {
            this.modalContent[name].target = this.add.image(200, 150, `${this.currentModal}-reward-${this.modalContent[name].num}`)
            this.tweens.add({
              targets: this.modalContent[name].target,
              duration: 800,
              x: 60 + 35 * this.rewardCounter,
              y: 20,
              scale: 0.3,
              delay: 300,
              pause: false,
            })
          } else {
            this.modalContent[name].target = this.add.image(580, 150, `${this.currentModal}-reward-${this.modalContent[name].num}`)
            this.tweens.add({
              targets: this.modalContent[name].target,
              duration: 800,
              x: this.rewardPosition.x + 60 * this.rewardCounter,
              y: this.rewardPosition.y,
              scale: 0.5,
              delay: 300,
              pause: false,
            })
          }
          this.rewardCounter++;
        }
      } else {
        if (!this.modalContent[name].click) {
          this.modalContent[name].click = true
          this.scoreTween = this.tweens.addCounter({
            from: this.scoreNumber,
            to: this.scoreNumber +  this.modalContent[name].num,
            duration: 1000
          })
          this.scoreNumber += this.modalContent[name].num
          this.scorePoint.setAlpha(1)
          this.scorePoint.setText(`+${this.modalContent[name].num}`)
          if (window.innerWidth < 1024) {
            this.scorePoint.setX(this.modalContent[name].xm)
            this.scorePoint.setY(this.modalContent[name].ym)
          } else {
            this.scorePoint.setX(this.modalContent[name].x)
            this.scorePoint.setY(this.modalContent[name].y)
          }
          this.tweens.add({
            targets: this.scorePoint,
            duration: 1200,
            alpha: 0,
            y: this.scorePoint.y - 80
          })
        }
      }
      let target = _.find(this.pointGroup.children.entries, function(o){ return o.name === name })
      target.setTexture('point-gray')
      this.element.setAlpha(0)
      this.modalLock = false

      let finish = _.filter(this.modalContent, function(o) { return o.click == true })
      if (finish.length >= 4 && !this.tipChangeFlag) {
        this.tipChangeFlag = true
        this.tipText.setText('讓所有貓咪座標\n變成橘色才算完成！')
      }
      if (finish.length === 11 && !this.end) {
        setTimeout(() => {
          this.end = true;
          this.tipText.setText('恭喜完成!\n領證書囉!')
          this.tipText.setX(1025)
          this.tipText.setY(450)
          console.log(this.rewardArray)
          window.dispatchEvent(new CustomEvent('cert', { detail: { reward: this.rewardArray }}))
        }, 600)
      }
    })

    this.cameras.main.once('camerafadeoutcomplete', function(camera) {
      this.firstGroup.toggleVisible()
      this.mainGroup.toggleVisible()
      this.pointGroup.toggleVisible()
      this.bg.setAlpha(1)
      if (window.innerWidth < 1024) {
        this.mobileTipPlay();
        this.questContain.setAlpha(1)
      } else {
        this.tweens.add({
          targets: this.ohBear,
          duration: 800,
          x: 180,
          angle: 0,
          pause: false,
        })
      }
      camera.fadeIn(800, 149, 188, 194)
    }, this)

    window.dispatchEvent(new Event('resize'))
  }

  update() {
    let score = (this.scoreTween) ? parseInt(this.scoreTween.getValue()) : 0
    this.scoreText.setText(`分數: ${score}/100`)
  }

  changeModalContent(name) {
    this.currentModal = name;
    this.modalHead.innerText = this.modalContent[name].title
    if (name === 'taichung' || name === 'ilan' || name === 'tainan' || name === 'hualien' || name === 'pingtung') {
      if (!this.modalContent[name].num) {
        this.modalContent[name].num = _.random(1, 2)
        this.modalText.innerText = this.modalContent[name].text[this.modalContent[name].num - 1]
        this.rewardArray.push({
          name: name,
          num: this.modalContent[name].num
        })
      }
      this.modalImage.src = `/images/${name}-reward-${this.modalContent[name].num}.png`
    } else {
      this.modalImage.src = `/images/${name}.jpg`
      this.modalText.innerText = this.modalContent[name].text
    }
  }

  mobileTipPlay() {
    this.tweens.add({
      targets: this.score,
      duration: 500,
      x: 180,
      y: 180,
      scale: 0.8,
      pause: false,
      onCompleteScope: this,
      onComplete: function() {
        this.mobileTipOpen = false;
        this.tweens.add({
          targets: [this.score, this.tipText],
          duration: 500,
          x: 25,
          y: 45,
          scale: 0,
          pause: false,
          delay: 2000
        })
      }
    })
    this.tweens.add({
      targets: this.tipText,
      duration: 500,
      x: 115,
      y: 175,
      scale: 1,
      pause: false
    })
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