import $ from 'jquery'
import Util from './util'


/**
 * Constants
 */
const NAME = 'anchor-scroll'
const VERSION = '1.0.0'
const Default = {
  duration: 600,
  easing: 'swing'
}
const DefaultType = {
  duration: 'number',
  easing: 'string'
}
const Event = {
  CLICK: 'click'
}


/**
 * Class Definition
 */
class AnchorScroll {

  constructor(element, config) {
    this._element = element || 'a'
    this._addEventListener(this._element, this._getConfig(config))
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

  scrollTo(targetElement, options) {
    let offsetTop = $(targetElement).offset().top
    let properties = { scrollTop: offsetTop }

    $('html, body').animate(properties, options)
  }


  // private

  _getConfig(config) {
    config = Object.assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(element, config) {
    let self = this

    $(`${element}[href^=#]`).on(Event.CLICK, function(e) {
      e.preventDefault()
      self.scrollTo(this.hash, config)
    })
  }
}


export default AnchorScroll
