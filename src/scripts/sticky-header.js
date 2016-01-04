import Util from './util'


/**
 * Constants
 */
const NAME = 'sticky-header'
const VERSION = '1.0.0'
const Default = {
  aboveTheFold: '#home',
  stickyClass: 'sticky'
}
const DefaultType = {
  aboveTheFold: 'string',
  stickyClass: 'string',
  offsetElement: '(string|undefined)',
}
const Event = {
  SCROLL: 'scroll'
}


/**
 * Class Definition
 */
class StickyHeader {

  constructor(element, config) {
    this._element = element || '.header'
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

  // Silence is golden


  // private

  _getConfig(config) {
    config = Object.assign({}, Default, config)
    Util.typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListener(element, config) {
    let self = this
    let header = document.querySelector(element)

    document.addEventListener(Event.SCROLL, () => {
      let aboveTheFoldHeight = this._aboveTheFoldHeight(config)
      let scrollTopPosition = document.body.scrollTop

      if (scrollTopPosition >= aboveTheFoldHeight) {
        header.classList.add(config.stickyClass)
      } else {
        header.classList.remove(config.stickyClass)
      }
    })
  }

  _aboveTheFoldHeight(config) {
    let offset = document.querySelector(config.offsetElement) ?
      document.querySelector(config.offsetElement).offsetHeight :
      0

    return document.querySelector(config.aboveTheFold).offsetHeight - offset
  }
}


export default StickyHeader
