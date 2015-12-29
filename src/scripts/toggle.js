import Util from './util'


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

    for (const i in configs) {
      const config = this._getConfig(configs[i])
      this._addEventListener(config)
    }
  }


  // public

  toggle(config) {
    document
      .querySelector(config.target || this._element)
      .classList
      .toggle(config.modifier)
  }


  // private

  _getConfig(config) {
    config = Object.assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(config) {
    document
      .querySelector(this._element)
      .addEventListener(Event.CLICK, () => {
        this.toggle(config)
      })
  }
}


export default Toggle
