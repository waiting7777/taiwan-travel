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
  }
  
  create() {
    // add cat
    this.cat = this.add.image(800, 300, 'cat')
    this.cat.setScale(0.7)
    console.log(this.cat)

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