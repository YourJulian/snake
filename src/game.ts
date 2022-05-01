import { Map } from "./map";

export class Game {
  speed: number = 500;

  constructor(private map: Map = new Map()) {}

  start() {
    this.process();
  }

  process() {
    setInterval(() => {
      console.log(1);
    }, this.speed);
  }

  end() {}
}
