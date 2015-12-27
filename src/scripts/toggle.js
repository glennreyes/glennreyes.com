import Util from './util'
import $ from 'jquery'


/**
 * Constants
 */

const NAME = 'toggle'
const VERSION = '1.0.0'
const DATA_KEY = 'gr.toggle'
const EVENT_KEY = `.${DATA_KEY}`

const Default = {
  modifier: 'active'
}
const DefaultType = {
  modifier: 'string',
  target: '(string|element|undefined)'
}
const Event = {
  CLICK: `click${EVENT_KEY}`
}


/**
 * Class Definition
 */

class Toggle {

  constructor(element, config) {
    this._element = element
    this._config  = this._getConfig(config)

    this._addEventListener()
  }


  // public

  toggle() {
    $(this._config.target || this._element).toggleClass(this._config.modifier)
  }


  // private

  _getConfig(config) {
    config = $.extend({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener() {
    $(this._element).on(Event.CLICK, () => {
      this.toggle()
    })
  }
}


export default Toggle
