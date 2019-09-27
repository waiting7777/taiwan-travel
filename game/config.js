export default {
  type: Phaser.AUTO,
  width: (window.innerWidth >= 1024) ? 1280 : 375,
  height: (window.innerWidth >= 1024) ? 675 : 530,
  parent: 'game',
  title: 'Virtual Pet',
  pixelArt: false,
  backgroundColor: 'ffffff',
  dom: {
    createContainer: true
  },
}