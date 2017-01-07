/**
 * Adds mobile menu toggle
 */

/* eslint-disable no-new */

// Get mobile menu

class MobileMenu {
  constructor () {
    this.mobileMenu = document.querySelector('.menu li.mobile')
    this.header = document.querySelector('section.header')

    this.toggleMenu = this.toggleMenu.bind(this)
    this.checkIfMobileMenuAvailable = this.checkIfMobileMenuAvailable.bind(this)

    this.addEvents()
  }

  addEvents () {
    this.mobileMenu.addEventListener('click', this.toggleMenu)
    this.header.addEventListener('click', this.toggleMenu)
  }

  checkIfMobileMenuAvailable () {
    // Check if the mobile menu option is hidden
    if (window.getComputedStyle(this.mobileMenu).display === 'none') {
      if (this.header.classList.contains('mobileOpen')) {
        return true
      } else {
        return false
      }
    }
    return true
  }

  toggleMenu (e) {
    e.stopPropagation()
    if (this.checkIfMobileMenuAvailable()) {
      this.header.classList.toggle('mobileOpen')
    }
  }
}

new MobileMenu()
