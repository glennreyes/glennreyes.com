import _ from 'lodash'
import scrollTo from 'animated-scrollto'
import Util from './util'


/**
 * Constants
 */
const NAME = 'anchor-scroll'
const VERSION = '1.0.0'
const Default = {
  duration: 600
}
const DefaultType = {
  offsetElement: '(string|undefined)',
  duration: 'number'
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

  scrollTo(element, options) {
    let scrollTop = this._scrollTop(element, options.offsetElement)
    let properties = { scrollTop: scrollTop }
    let target = document.querySelectorAll('html, body');

    for (let i = 0; i < target.length; i++) {
      scrollTo(target[i], scrollTop, options.duration)
    }
    // $('html, body').animate(properties, options)

  }


  // private

  _getConfig(config) {
    config = _.assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(element, config) {
    let self = this
    let elements = document.querySelectorAll(element)

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(Event.CLICK, function(e) {
        e.preventDefault()
        self.scrollTo(this.hash, config)
      })
    }
  }

  _scrollTop(targetElement, offsetElement) {
    let offset = document.querySelector(offsetElement) ?
      document.querySelector(offsetElement).offsetHeight :
      0
    return document.querySelector(targetElement).offsetTop - offset
  }
}


export default AnchorScroll
