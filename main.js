class RootElement {
  constructor(width, height, color, tagName = "DIV") {
    this.width = width;
    this.height = height;
    this.color = color;
    this.element = document.createElement(tagName);
  }
  create() {
    this.element.style.width = this.element.style.height = this.width + "px";
    this.element.style.backgroundColor = this.color;
    this.element.style.transition = "opacity 2s";
    this.element.style.cursor = "pointer";
    document
      .querySelector(".root")
      .insertAdjacentElement("beforeend", this.element);
  }
  hide() {
    this.element.style.opacity = "0";
  }
  show() {
    this.element.style.opacity = "1";
  }
}
class RectangleSh extends RootElement {
  constructor(width, height, color, shadow, tagName) {
    super(width, height, color, (tagName = "DIV"));
    this.boxShadow = shadow;
  }
  createEl() {
    this.create();
    this.element.style.height = this.height + "px";
    this.element.style.boxShadow = this.boxShadow;
    return this;
  }
}
class Circle extends RootElement {
  constructor(width, height, color, tagName) {
    super(width, height, color, (tagName = "DIV"));
  }
  createEl() {
    this.create();
    this.element.style.borderRadius = "50%";
    return this;
  }
}
class Romb extends RootElement {
  constructor(width, height, color, tagName) {
    super(width, height, color, (tagName = "DIV"));
  }
  createEl() {
    this.create();
    this.element.style.transform = "rotate(45deg)";
    return this;
  }
}
class Triangle {
  constructor(
    top,
    t = false,
    right,
    r = false,
    bottom,
    b = false,
    left,
    l = false,
    color = "transparent"
  ) {
    this.top = top;
    this.t = t;
    this.right = right;
    this.r = r;
    this.bottom = bottom;
    this.b = b;
    this.left = left;
    this.l = l;
    this.color = color;
    this.element = document.createElement("DIV");
  }
  create() {
    this.element.style.width = this.element.style.height = "0";
    this.element.style.borderTop = `${this.top}px solid ${
      this.t ? this.color : 'transparent'
    }`;
    this.element.style.borderRight = `${this.right}px solid ${
      this.r ? this.color : 'transparent'
    }`;
    this.element.style.borderBottom = `${this.bottom}px solid ${
      this.b ? this.color : 'transparent'
    }`;
    this.element.style.borderLeft = `${this.left}px solid ${
      this.l ? this.color : 'transparent'
    }`;
    document.querySelector(".root").insertAdjacentElement("beforeend", this.element);
  }
}

let square = new RootElement(100, undefined, "red");
square.create();
// square.hide()
// square.show()
setInterval(() => {
  square.hide();
  setTimeout(() => {
    square.show();
  }, 1000);
}, 2000);

let rect = new RectangleSh(100, 200, "green", "2px 2px 3px grey");
rect.createEl();
let circle = new Circle(100, 100, "yellow");
circle.createEl();
let romb = new Romb(100, 100, "violet");
romb.createEl();
romb.element.addEventListener("mouseenter", () => {
  romb.hide();
});
romb.element.addEventListener("mouseleave", () => {
  romb.show();
});
let tUp = new Triangle(
  0,
  false,
  50,
  false,
  100,
  true,
  50,
  false,
  "red"
)
tUp.create()
