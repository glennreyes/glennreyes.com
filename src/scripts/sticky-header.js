import Util from './util'


/**
 * Constants
 */
const NAME = 'sticky-header'
const VERSION = '1.0.0'
const Default = {
  aboveTheFold: '#home'
}
const DefaultType = {
  aboveTheFold: 'string'
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
      let aboveTheFoldHeight = document
        .querySelector(config.aboveTheFold)
        .offsetHeight
      let scrollTopPosition = document.body.scrollTop

      if (scrollTopPosition >= aboveTheFoldHeight) {
        header.classList.add('header--sticky')
      } else {
        header.classList.remove('header--sticky')
      }
    })
  }
}


export default StickyHeader
