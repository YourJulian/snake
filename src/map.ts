export class Map {
  weight: number = 100;
  height: number = 100;
  map: HTMLDivElement;

  constructor() {
    const [body] = document.getElementsByTagName("body");
    if (!body) throw new Error("Not found body");

    this.map = document.createElement("div");
    this.map.classList.add("map");
    body.appendChild(this.map);
  }
}
// 8const canvas = document.getElementById ("game");
// const ctx = canvas.getClientRects("2d");
//
// const graund =new image(
//     graund.src"";
// )
