class Popup { //eslint-disable-line
  constructor(text, type = "ok") {
    this.container = document.getElementById("poppy_container") ? document.getElementById("poppy_container") : new Container();
    this.element = document.createElement('span');
    this.element.setAttribute('class', `popup-${type}`);
    this.element.textContent = text;
    this.currentTimers = [];
    this
      .onClick(this.deleteMe)
      .onMouseOver(this.setPause)
      .onMouseOut(this.setUnpause)
      .attachCloseButton()
      .addClass("enter")
      .setExit(10000)
      .setDestroy(10350)
      .render();
    return Object.freeze(this);
  }

  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.element.classList.remove(className);
    return this;
  }

  onClick(func) {
    this.element.onclick = func.bind(this);
    return this;
  }

  onMouseOver(func) {
    this.element.onmouseover = func.bind(this);
    return this;
  }

  onMouseOut(func) {
    this.element.onmouseout = func.bind(this);
    return this;
  }

  setPause() {
    this.clearAllTimers();
    this.addClass("pause");
    this.removeClass("enter");
    this.removeClass("exit");
    this.removeClass("idle");
  }

  setUnpause() {
    this.removeClass("pause");
    this.addClass("idle");
    this.setExit(10000);
    this.setDestroy(10250);
  }

  setExit(miliseconds) {
    const timer = setTimeout(() => {
      this.removeClass("idle");
      this.addClass("exit");
    }, miliseconds);
    this.currentTimers.push(timer);
    return this;
  }

  setDestroy(milliseconds) {
    const timer = setTimeout(() => {
      this.destroy();
    }, milliseconds);
    this.currentTimers.push(timer);
    return this;
  }

  destroy() {
    this.element.parentNode.removeChild(this.element);
    return this;
  }

  deleteMe() {
    this.clearAllTimers();
    this.setExit(0);
    this.setDestroy(250);
  }

  clearAllTimers() {
    this.currentTimers.forEach((item) => {
      clearTimeout(item);
    });
    return this;
  }

  render() {
    this.container.appendChild(this.element);
    return this;
  }

  attachCloseButton() {
    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'close-thik');
    this.element.appendChild(closeButton);
    return this;
  }
}