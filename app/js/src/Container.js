/* eslint no-underscore-dangle: 0 */

class Container { //eslint-disable-line
  constructor() {
    return this
      ._createElement()
      ._setAttributes()
      ._attachToDom().container;
  }

  _createElement() {
    this.container = document.createElement('div');
    this.wrapper = document.createElement('div');
    return this;
  }

  _setAttributes() {
    this.container.setAttribute('id', 'poppy_container');
    this.wrapper.setAttribute('id', 'poppy_wrapper');
    return this;
  }

  _attachToDom() {
    document.body.appendChild(this.wrapper);
    this.wrapper.appendChild(this.container);
    return this;
  }
}
