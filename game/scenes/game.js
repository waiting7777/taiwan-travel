import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
  constructor () {
    super()
  }

  init() {
  }

  preload() {
    // load assets
    this.load.image('cat', '/images/cat.png');
    this.load.image('arrow-down', '/images/arrow-down.png')
    this.load.image('taiwan', '/images/taiwan.png')
    this.load.image('oh-bear', '/images/oh-bear.png')
    this.load.image('score', '/images/score.png')
    this.load.image('taipei', '/images/taipei.png')
    this.load.image('taichung', '/images/taichung.png')
    this.load.image('miaoli', '/images/miaoli.png')
    this.load.image('tainan', '/images/tainan.png')
    this.load.image('ilan', '/images/ilan.png')
    this.load.image('taitung', '/images/taitung.png')
    this.load.image('hualian', '/images/hualian.png')
  }
  
  create() {
    // add cat
    this.cat = this.add.image(800, 300, 'cat').setScale(0.7)
    // add welcome text
    this.welcome1 = this.add.text(350, 200, 'Hi~歡迎來到', { fontSize: '24px', color: '#000' })
    this.welcome2 = this.add.text(340, 230, '台灣好好玩', { fontSize: '32px', fontWeight: 'bold', color: '#000' })
    this.welcome3 = this.add.text(335, 270, '景點尋寶積分賽', { fontSize: '24px', color: '#000' })

    // add arrow down button
    this.arrowButton = this.add.image(600, 575, 'arrow-down').setInteractive({ useHandCursor: true  })
    // event listener for the background
    this.arrowButton.on('pointerdown', this.nextPage, this);

    // add taiwan
    this.taiwan = this.add.image(600, 350, 'taiwan').setScale(0.5).setAlpha(0)
    this.taipei = this.add.image(680, 100, 'taipei').setScale(0.5).setAlpha(0)
    this.miaoli = this.add.image(530, 120, 'miaoli').setScale(0.5).setAlpha(0)
    this.taichung = this.add.image(450, 220, 'taichung').setScale(0.3).setAlpha(0)
    this.tainan = this.add.image(370, 380, 'tainan').setScale(0.4).setAlpha(0)
    this.ilan = this.add.image(850, 170, 'ilan').setScale(0.4).setAlpha(0)
    this.hualian = this.add.image(800, 300, 'hualian').setScale(0.4).setAlpha(0)
    this.taitung = this.add.image(750, 450, 'taitung').setScale(0.4).setAlpha(0)

    // add oh bear
    this.ohBear = this.add.image(-150, 400, 'oh-bear').setScale(0.7).setAngle(-45)

    // add score
    this.score = this.add.image(1150, 500, 'score').setScale(0.4, 0)

    this.cameras.main.once('camerafadeoutcomplete', function(camera) {
      this.cat.setAlpha(0)
      this.welcome1.setAlpha(0)
      this.welcome2.setAlpha(0)
      this.welcome3.setAlpha(0)
      this.arrowButton.setAlpha(0)
      this.taiwan.setAlpha(1)
      this.taipei.setAlpha(1)
      this.miaoli.setAlpha(1)
      this.taichung.setAlpha(1)
      this.tainan.setAlpha(1)
      this.ilan.setAlpha(1)
      this.hualian.setAlpha(1)
      this.taitung.setAlpha(1)
      this.tweens.add({
        targets: this.ohBear,
        duration: 800,
        x: 125,
        angle: 0,
        pause: false,
      })
      this.tweens.add({
        targets: this.score,
        duration: 800,
        scaleY: 0.4,
        pause: false,
      })
      camera.setBackgroundColor('rgba(149, 188, 194)')
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
      pause: false,
    })
  }
}