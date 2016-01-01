import Toggle from './toggle'
import AnchorScroll from './anchor-scroll'


/**
 * Navigation Toggle
 */
const navToggle = new Toggle('.nav-toggle, .header-nav__item', {
  target: 'body',

  // UnCSS
  modifier: 'nav-open',
  modifierOff: 'nav-close'
})


/**
 * Anchor Scroll
 */
const anchorScroll = new AnchorScroll()
