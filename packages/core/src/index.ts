import { createGraphTree } from '@gr2d/graph-tree'

export type ApplicationInitOptions = Partial<{
  background: string
}>
export class Application {
  name: string
  canvas: HTMLCanvasElement
  graphTree: ReturnType<typeof createGraphTree>
  constructor(name: string) {
    this.name = name
    this.canvas = document.createElement('canvas')
    this.graphTree = createGraphTree()
  }
}
