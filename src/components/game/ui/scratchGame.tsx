import * as Phaser from 'phaser'

import nightImage from './../../../../public/night.png'
import sunsetImage from './../../../../public/sunset.png'

const ScratchGame = () => {
  const config: Phaser.Types.Core.GameConfig = {
    height: 600,
    parent: 'root',
    scene: {
      create: create,
      preload: preload,
      update: update,
    },
    type: Phaser.AUTO,
    width: 800,
  }

  new Phaser.Game(config)

  let nightLayer: Phaser.GameObjects.Image
  let maskGraphics: Phaser.GameObjects.Graphics
  let isScratching = false

  function preload(this: Phaser.Scene): void {
    this.load.image('sunset', sunsetImage)
    this.load.image('night', nightImage)
  }

  function create(this: Phaser.Scene): void {
    this.add.image(400, 300, 'sunset')

    nightLayer = this.add.image(400, 300, 'night')

    maskGraphics = this.add.graphics()

    nightLayer.setDepth(1)

    this.input.on('pointerdown', startScratch)
    this.input.on('pointerup', stopScratch)
  }

  function update(this: Phaser.Scene): void {
    if (isScratching) {
      maskGraphics.fillCircle(this.input.x, this.input.y, 50)
    }
    nightLayer.setMask(maskGraphics.createGeometryMask())
  }

  function startScratch(): void {
    isScratching = true
  }

  function stopScratch(): void {
    isScratching = false
  }

  return <div />
}

export default ScratchGame
