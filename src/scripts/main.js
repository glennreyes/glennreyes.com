import Toggle from './toggle'
import AnchorScroll from './anchor-scroll'
import StickyHeader from './sticky-header'
import Tabs from './tabs'





/**
 * Navigation Toggle
 */
const navToggle = new Toggle('.nav-toggle, .header-nav__item', {
  target: 'body',

  // UnCSS
  modifier: 'nav-open'
})





/**
 * Footer Links
 */
const footerLinks = new Tabs('.tab-link', {
  close: '.close',
  content: '.footer-section',
  modifier: 'footer-section--open'
})





/**
 * Anchor Scroll
 */
const anchorScroll =
  new AnchorScroll('.logo, .header-nav__item, .scroll-down, .scroll-up, .tab-link')





/**
 * Sticky Header
 */
const stickyHeader = new StickyHeader('.page-header', {
  aboveTheFold: '#home',
  stickyClass: 'page-header--sticky'
})
