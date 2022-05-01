export class Block {
  block: HTMLDivElement;

  constructor(private x: number, private y: number) {
    const [map] = document.getElementsByClassName("map");
    if (!map) throw new Error("Not found map");

    this.block = document.createElement("div");
    this.block.setAttribute("x", x.toString());
    this.block.setAttribute("y", y.toString());

    this.block.classList.add("block");

    map.appendChild(this.block);
  }
}
