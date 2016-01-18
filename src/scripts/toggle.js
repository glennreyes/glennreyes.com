import Util from './util'
import assign from 'lodash/assign'


/**
 * Constants
 */
const NAME = 'toggle'
const VERSION = '1.0.0'
const Default = {
  modifier: 'active'
}
const DefaultType = {
  modifier: 'string',
  close: '(string|undefined)',
  target: '(string|undefined)'
}
const Event = {
  CLICK: 'click'
}


/**
 * Class Definition
 */
class Toggle {

  constructor(element, ...configs) {
    this._element = element

    for (let i in configs) {
      let config = this._getConfig(configs[i])
      this._addEventListener(this._element, config)
    }
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

  toggle(element, config, onOff) {
    let targetElement = document.querySelector(config.target) || element
    let targetClassList = targetElement.classList

    switch (onOff) {
    case true:
      targetClassList.add(config.modifier)
      break
    case false:
      targetClassList.remove(config.modifier)
      break
    default:
      targetClassList.toggle(config.modifier)
    }
  }


  // private

  _getConfig(config) {
    config = assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(selector, config) {
    let elements = document.querySelectorAll(selector)

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      element.addEventListener(Event.CLICK, (e) => {
        e.preventDefault()
        this.toggle(element, config)
      })
    }

    let close = document.querySelector(config.close)

    close.addEventListener(Event.CLICK, (e) => {
      e.preventDefault()
      this.toggle(close, config, false)
    })
  }
}


export default Toggle
