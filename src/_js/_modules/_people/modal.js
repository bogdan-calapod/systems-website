
/**
 * People Modal trigger and autofill
 */

/* eslint-disable no-new */

import { generateList } from './listGenerator'

class PeopleModal {
  constructor () {
    this.modal = document.querySelector('section.people .modal')
    this.modalElements = {
      title: this.modal.querySelector('.heading h1'),
      subtitle: this.modal.querySelector('.heading h2'),
      social: this.modal.querySelector('.heading .social'),
      photo: this.modal.querySelector('.photo'),
      description: this.modal.querySelector('.details p'),
      list: this.modal.querySelector('.details .list')
    }
    this.peopleBoxes = [].slice.call(document.querySelectorAll('section.people .person'))

    this.data = {}
    this.defaultData = {
      name: '',
      position: '',
      photo: '',
      description: '',
      details: {}
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.saveDataAndUpdate = this.saveDataAndUpdate.bind(this)
    this.updateModal = this.updateModal.bind(this)

    this.addEvents()
  }

  /**
   * Saves modal data in the current instance (this.data)
   * Also triggers an update on the values of the elements
   */
  saveDataAndUpdate (data) {
    data = JSON.parse(data)
    console.log(data, this.data)
    this.data = Object.assign(
      {},
      this.defaultData,
      data
    )

    this.updateModal()
  }

  /**
   * Updates the modal elements with
   * values from data
   */
  updateModal () {
    // Update the simple values first
    this.modalElements.title.innerHTML = this.data.name
    this.modalElements.subtitle.innerHTML = this.data.position
    this.modalElements.description.innerHTML = this.data.description
    this.modalElements.photo.style.backgroundImage = 'url(../img/people/' + this.data.photo + ')'

    // Call list generator for the rest of the data
    this.modalElements.list.innerHTML = ''
    this.modalElements.list.appendChild(generateList(this.data.details))
  }

  /**
   * Toggles for modal open/close
   */
  openModal (e) {
    this.saveDataAndUpdate(e.currentTarget.dataset.person)
    this.modal.classList.add('open')
  }

  closeModal (e) {
    console.log(e.keyCode)
    if (e.keyCode) {
      if (e.keyCode !== 27) {
        return
      }
    }
    this.modal.classList.remove('open')
  }


  /**
   * Add event listeners
   */
  addEvents () {
    this.peopleBoxes.forEach(
      x => x.addEventListener('click', this.openModal)
    )

    this.modal.addEventListener('click', this.closeModal)

    // Stop propagation on child
    this.modal.querySelector('.content').addEventListener('click',
      e => e.stopPropagation()
    )

    // Close modal on Esc Key
    document.addEventListener(
      'keyup',
      this.closeModal
    )
  }


}

new PeopleModal()
