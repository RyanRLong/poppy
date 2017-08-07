
class Popup {
  constructor(text, container) {
    this.container = container;
    this.element = document.createElement('span');
    this.element.setAttribute('class', 'popup');
    this.element.textContent = text;
    this.attachCloseButton();
    this.container.appendChild(this.element);
    this.addClass("enter");
    this.setIdle(5000);
    this.setExit(10000);
    this.setDestroy(11000);
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.element.classList.remove(className);
    return this;
  }

  setIdle(milliseconds) {
    setTimeout(() => {
      this.removeClass("enter");
      this.addClass("idle");
    }, milliseconds);
    return this;
  }

  setExit(miliseconds) {
    setTimeout(() => {
      this.removeClass("idle");
      this.addClass("exit");
    }, miliseconds);
  }

  setDestroy(milliseconds){
    setTimeout(()=>{
      this.element.parentNode.removeChild(this.element);
    }, milliseconds);
  }

  render() {
    this.container.appendChild(this.element);
    return this;
  }

  attachCloseButton() {
    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'close-classic');
    this.element.appendChild(closeButton);
    return this;
  }
}

class Container {
  constructor() {
    return this
      ._createElement()
      ._setAttributes()
      ._attachToDom().container;
  }

  _createElement() {
    console.log(this.container);
    this.container = document.createElement('div');
    return this;
  }

  _setAttributes() {
    console.log(this.container);
    this.container.setAttribute('class', 'container');
    this.container.setAttribute('id', 'container');
    return this;
  }

  _attachToDom() {
    console.log(this.container);
    document.body.appendChild(this.container);
    return this;
  }
}

const container = new Container();

for (let i=0; i < 10; i++) {
  setTimeout(()=>{
    const temp = new Popup(`Its now ${i + 1000}`, container);
    console.log(temp);
  }, i*2000);
}
