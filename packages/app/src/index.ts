import Renderer from '@gr2d/renderer'
import Stage from '@gr2d/stage'

export class Application {
  name: string
  canvas: HTMLCanvasElement
  stage: Stage
  renderer: Renderer
  constructor(name: string) {
    this.name = name
    this.canvas = document.createElement('canvas')
    this.stage = new Stage()
    this.renderer = new Renderer()
  }
}
