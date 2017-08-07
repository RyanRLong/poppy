class Popup { //eslint-disable-line
  constructor(text) {
    const self = this;
    this.container = document.getElementById("poppy_container") ? document.getElementById("poppy_container") : new Container();
    this.element = document.createElement('span');
    this.element.setAttribute('class', 'popup');
    this.element.textContent = text;
    this.currentTimers = [];
    this.element.onclick = function() {
      self.clearAllTimers();
      self.destroy();
    };
    this
      .attachCloseButton()
      .addClass("enter")
      .setIdle(10000)
      .setExit(60000)
      .setDestroy(60350)
      .render();

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
    const timer = setTimeout(() => {
      this.removeClass("enter");
      this.addClass("idle");
    }, milliseconds);
    this.currentTimers.push(timer);
    return this;
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
    const self = this;
    const closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'close-thik');
    closeButton.onclick = function() {
      self.clearAllTimers();
      self.setDestroy(0);
    };
    this.element.appendChild(closeButton);
    return this;
  }
}