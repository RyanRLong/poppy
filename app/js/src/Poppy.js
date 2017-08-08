class Poppy { //eslint-disable-line
  constructor() {
    return Object.freeze({
      warn: message => new Popup(message, "warning"),
      primary: message => new Popup(message, "primary"),
      error: message => new Popup(message, "error"),
      danger: message => new Popup(message, "danger"),
      success: message => new Popup(message, "success")
    });
  }
}
