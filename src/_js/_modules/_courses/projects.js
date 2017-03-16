// Projects manager

import {toArray} from './modal'

class Projects {
  constructor () {
    this.filterBox = document.querySelector('.filter input')
    this.projects = toArray(document.querySelectorAll('.projects tr'))

    this.title = document.querySelector('.modal.projects h1')
    this.iframe = document.querySelector('.modal.projects iframe')

    this.modal = document.querySelector('.modal.projects')

    this.filter = this.filter.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.baseURL = 'https://docs.google.com/viewer?srcid=%%ID%%&pid=explorer&efh=false&a=v&chrome=false&embedded=true'

    this.addEvents()
  }

  addEvents () {
    this.filterBox.addEventListener('input', this.filter)

    this.projects.forEach(
      x => x.addEventListener('click', this.openModal)
    )

    this.modal.addEventListener('click', this.closeModal)
    this.modal.querySelector('.content').addEventListener(
      'click',
      e => e.stopPropagation()
    )
  }

  openModal (e) {
    let url = e.currentTarget.dataset.url

    this.title.innerHTML = e.currentTarget.querySelector('td').innerHTML
    this.iframe.src = this.createURL(url)

    this.modal.classList.add('open')
  }

  createURL (url) {
    let id

    // Determine sheet id
    if (url.includes('/d/')) {
      id = url.split('/d/')[1].split('/')[0]
    } else if (url.includes('id=')) {
      id = url.split('id=')[1]
    }

    return this.baseURL.replace('%%ID%%', id)
  }

  closeModal (e) {
    this.modal.className = 'modal projects flex'
    this.iframe.src = ''
  }

  filter (e) {
    let value = e.currentTarget.value.toLowerCase()

    this.projects.forEach(
      p => {
        if (p.innerHTML.toLowerCase().includes(value)) {
          p.style.display = 'table-row'
        } else {
          p.style.display = 'none'
        }
      }
    )
  }
}

// Instantiate the class if we are on bachelor or master page
let page = window.location.href

if (page.includes('bachelor') || page.includes('master')) {
  new Projects() // eslint-disable-line no-new
}
