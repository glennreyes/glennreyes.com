import Toggle from './toggle'


/**
 * Navigation Toggle
 */
const navToggle = new Toggle(
  '.nav-toggle',
  {
    target: 'body',

    // UnCSS
    modifier: 'nav-open',
    modifierOff: 'nav-close'
  }
)
