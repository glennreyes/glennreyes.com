import { assign } from 'lodash'
import Util from './util'


/**
 * Constants
 */
const NAME = 'tabs'
const VERSION = '1.0.0'
const Default = {
  modifier: 'active'
}
const DefaultType = {
  close: 'string',
  content: 'string',
  modifier: 'string',
  target: '(string|undefined)'
}
const Event = {
  CLICK: 'click'
}


/**
 * Class Definition
 */
class Tabs {

  constructor(element, config) {
    this._element = element
    this._config = this._getConfig(config)
    this._addEventListener(this._element, this._config)
  }


  // getters

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }


  // public

  openTab(link, config) {
    let elements = document.querySelectorAll(config.content)
    let tab = document.querySelector(link.hash)

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i]

      if (element === tab) {
        element.classList.add(config.modifier)
      } else {
        element.classList.remove(config.modifier)
      }
    }
  }

  closeTab(link, config) {
    let elements = document.querySelectorAll(config.content)

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(config.modifier)
    }
  }


  // private

  _getConfig(config) {
    config = assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(selector, config) {

    // Open
    let elements = document.querySelectorAll(selector)

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      element.addEventListener(Event.CLICK, (e) => {
        e.preventDefault()
        this.openTab(element, config)
      })
    }

    // Close
    let closeElements = document.querySelectorAll(config.close)

    for (let i = 0; i < closeElements.length; i++) {
      let closeElement = closeElements[i];

      closeElement.addEventListener(Event.CLICK, (e) => {
        e.preventDefault()
        this.closeTab(closeElement, config)
      })
    }
  }
}


export default Tabs
