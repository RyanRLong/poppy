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
    return this;
  }

  _setAttributes() {
    this.container.setAttribute('id', 'poppy_container');
    return this;
  }

  _attachToDom() {
    document.body.appendChild(this.container);
    return this;
  }
}
