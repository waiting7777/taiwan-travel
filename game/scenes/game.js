import Phaser from 'phaser'

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
      }
    }
  }

  preload() {
    // load assets
    this.load.image('bg', '/images/bg.png');
    this.load.image('cat', '/images/cat.png');
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

    this.load.spritesheet('score', '/images/score.png', { frameWidth: 322, frameHeight: 433 });
  }
  
  create() {
    // create first group
    this.firstGroup = this.add.group()

    // add cat
    this.cat = this.add.image(800, 300, 'cat').setScale(0.7).setAlpha(1)

    // add welcome text
    this.welcome1 = this.add.text(350, 200, 'Hi~歡迎來到', this._fontStyle)
    this.welcome2 = this.add.text(340, 230, '台灣好好玩', { fontSize: '32px', fontWeight: 'bold', color: '#000', fontFamily: 'Microsoft JhengHei' })
    this.welcome3 = this.add.text(335, 270, '景點尋寶積分賽', this._fontStyle)
    this.firstGroup.add(this.welcome1);
    this.firstGroup.add(this.welcome2);
    this.firstGroup.add(this.welcome3);

    // add arrow down button
    this.arrowButton = this.add.image(600, 575, 'arrow-down').setInteractive({ useHandCursor: true  })
    this.firstGroup.add(this.arrowButton);
    // event listener for the background
    this.arrowButton.on('pointerdown', this.nextPage, this);

    // add bg
    this.bg = this.add.image(0, 0, 'bg').setOrigin(0).setDepth(-1).setAlpha(0)

    // create first group
    this.mainGroup = this.add.group()

    // add taiwan
    this.taiwan = this.add.image(600, 350, 'taiwan').setName('taiwan')
    this.taipei = this.add.image(682, 85, 'taipei').setName('taipei')
    this.taoyuan = this.add.image(545, 90, 'taoyuan').setName('taoyuan')
    this.miaoli = this.add.image(620, 200, 'miaoli').setName('miaoli')
    this.taichung = this.add.image(495, 200, 'taichung').setName('taichung')
    this.nantou = this.add.image(620, 300, 'nantou').setName('nantou')
    this.tainan = this.add.image(390, 370, 'tainan').setName('tainan')
    this.kaohsiung = this.add.image(540, 430, 'kaohsiung').setName('kaohsiung')
    this.pingtung = this.add.image(455, 560, 'pingtung').setName('pingtung')
    this.ilan = this.add.image(855, 155, 'ilan').setName('ilan')
    this.hualien = this.add.image(750, 300, 'hualien').setName('hualien')
    this.taitung = this.add.image(710, 490, 'taitung').setName('taitung')

    this.mainGroup.addMultiple([this.taiwan, this.taipei, this.taoyuan, this.miaoli, this.taichung, this.nantou,
                                this.tainan, this.kaohsiung, this.pingtung, this.ilan, this.hualien, this.taitung])

    for (let i in this.mainGroup.children.entries) {
      if (this.mainGroup.children.entries[i].name !== 'taiwan') {
        this.mainGroup.children.entries[i].setInteractive({
          useHandCursor: true
        })
        this.mainGroup.children.entries[i].on('pointerover', function(pointer) {          
          this.setScale(1.1)
        })
        this.mainGroup.children.entries[i].on('pointerout', function(pointer) {
          this.setScale(1)
        })
        this.mainGroup.children.entries[i].on('pointerdown', (pointer) => {
          if (!this.modalLock) {
            this.modalLock = true       
            this.elementTween.play()
          }
        })
      }
    }

    // add oh bear
    this.ohBear = this.add.image(-200, 400, 'oh-bear').setScale(1).setAngle(-45)

    // add score
    let scoreAnim = this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('score'),
      frameRate: 6,
      repeat: -1
    });
    this.score = this.add.sprite(1000, 460, 'score').setScale(1)
    this.score.anims.play('walk')
    this.mainGroup.add(this.score)

    this.mainGroup.toggleVisible()

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

    this.element = this.add.dom(350, 50, div).setOrigin(0).setScale(0, 1)
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

  nextPage() {
    console.log(789)
    this.cameras.main.fadeOut(800, 149, 188, 194)
    this.tweens.add({
      targets: this.cat,
      duration: 800,
      y: -100,
      alpha: 0,
      pause: false,
    })
  }
}