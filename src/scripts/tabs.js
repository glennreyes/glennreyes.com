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

  activateTab(link, config) {
    let elements = document.querySelectorAll(config.content)
    let tab = document.querySelector(link.hash)

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i]

      console.log(element === tab)
      if (element === tab) {
        element.classList.add(config.modifier)
      } else {
        element.classList.remove(config.modifier)
      }
    }
  }


  // private

  _getConfig(config) {
    config = Object.assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(selector, config) {
    let elements = document.querySelectorAll(selector)

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      element.addEventListener(Event.CLICK, (e) => {
        e.preventDefault()
        this.activateTab(element, config)
      })
    }
  }
}


export default Tabs
