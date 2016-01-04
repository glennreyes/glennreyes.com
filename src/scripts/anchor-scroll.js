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
  offsetElement: '(string|undefined)',
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

  scrollTo(targetElement, options) {
    let scrollTop = this._scrollTop(targetElement, options.offsetElement)
    let properties = { scrollTop: scrollTop }

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

  _scrollTop(targetElement, offsetElement) {
    let offset = document.querySelector(offsetElement) ?
      document.querySelector(offsetElement).offsetHeight :
      0
    return document.querySelector(targetElement).offsetTop - offset
  }
}


export default AnchorScroll
