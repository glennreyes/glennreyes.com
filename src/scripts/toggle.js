import Util from './util'


/**
 * Constants
 */
const NAME = 'toggle'
const VERSION = '1.0.0'
const Default = {
  modifier: 'active'
  // modifierOff: 'inactive'
}
const DefaultType = {
  modifier: 'string',
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
    // this._state = null

    for (let i in configs) {
      let config = this._getConfig(configs[i])
      this._addEventListener(config)
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

  toggle(config) {
    // let toggleState = this._state

    document
      .querySelector(config.target || this._element)
      .classList
      .toggle(config.modifier)

    // if (typeof toggleState === 'boolean') {
    //   document
    //     .querySelector(config.target || this._element)
    //     .classList
    //     .toggle(config.modifierOff)
    // }
    //
    // this._state = toggleState ? false : true
  }


  // private

  _getConfig(config) {
    config = Object.assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(config) {
    let elements = document.querySelectorAll(this._element)

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(Event.CLICK, (e) => {
        console.log('clicky')
        e.preventDefault()
        this.toggle(config)
      })
    }
  }
}


export default Toggle
