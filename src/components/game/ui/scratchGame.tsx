import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomizedSnackbars } from '@/components/errorSnackbar/errorSnackbar'
import { RoutePath } from '@/config/routeConfig'
import { useAppDispatch } from '@/store/hooks/hooks'
import { resetState } from '@/store/slice/surveySlice'
import * as PIXI from 'pixi.js'

import png from './../../../../public/night.png'
import sunset from './../../../../public/sunset.png'

const ScratchGame = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const game = new PIXI.Application({ height: 600, width: 800 })

    document.body.appendChild(game.view as any)

    const stageSize = { height: game.screen.height, width: game.screen.width }
    const renderTexture = PIXI.RenderTexture.create(stageSize)

    const brush = new PIXI.Graphics().beginFill(0xffffff).drawCircle(0, 0, 50)

    const line = new PIXI.Graphics()

    PIXI.Assets.add('t1', sunset)
    PIXI.Assets.add('t2', png)
    PIXI.Assets.load(['t1', 't2']).then(setup)

    function setup() {
      const background = Object.assign(PIXI.Sprite.from('t1'), stageSize)
      const imageToReveal = Object.assign(PIXI.Sprite.from('t2'), stageSize)
      const renderTextureSprite = new PIXI.Sprite(renderTexture)

      imageToReveal.mask = renderTextureSprite

      game.stage.addChild(background, imageToReveal, renderTextureSprite)

      game.stage.interactive = true
      game.stage.hitArea = game.screen
      game.stage
        .on('pointerdown', pointerDown)
        .on('pointerup', pointerUp)
        .on('pointerupoutside', pointerUp)
        .on('pointermove', pointerMove)

      let dragging = false
      let lastDrawnPoint: PIXI.Point | null = null

      function pointerMove(event: any) {
        if (dragging) {
          const { x, y } = event.data.global

          brush.position.set(x, y)
          game.renderer.render(brush, {
            clear: false,
            renderTexture,
            skipUpdateTransform: false,
          })

          if (lastDrawnPoint) {
            line
              .clear()
              .lineStyle({ color: 0xffffff, width: 100 })
              .moveTo(lastDrawnPoint.x, lastDrawnPoint.y)
              .lineTo(x, y)
            game.renderer.render(line, {
              clear: false,
              renderTexture,
              skipUpdateTransform: false,
            })
          }

          lastDrawnPoint = lastDrawnPoint || new PIXI.Point()
          lastDrawnPoint.set(x, y)

          updatePaintedPixels()
        }
      }

      function pointerDown(event: any) {
        dragging = true
        pointerMove(event)
      }

      function pointerUp() {
        dragging = false
        lastDrawnPoint = null
      }

      updatePaintedPixels()
    }

    function updatePaintedPixels() {
      const pixels = game.renderer.plugins.extract.pixels(renderTexture)
      let paintedPixels = 0

      for (let i = 0; i < pixels.length; i += 4) {
        const alpha = pixels[i + 3]

        if (alpha > 0) {
          paintedPixels++
        }
      }

      const progress = (paintedPixels / (stageSize.width * stageSize.height)) * 100

      if (progress >= 80) {
        setSuccess(true)
        setOpen(true)

        // Show the success notification for 3 seconds
        setTimeout(() => {
          setOpen(false)
          dispatch(resetState())
          navigate(RoutePath.RESULT)
        }, 1000)
      }
    }

    return () => {
      game.destroy(true)
    }
  }, [navigate])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div id={'pixi-container'} />
      <CustomizedSnackbars isAnswerCorrect={success} onClose={handleClose} open={open} />
    </div>
  )
}

export default ScratchGame
