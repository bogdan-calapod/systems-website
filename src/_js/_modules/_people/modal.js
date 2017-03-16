
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
      social: {
        mail: this.modal.querySelector('.social .mail'),
        facebook: this.modal.querySelector('.social .facebook'),
        linkedin: this.modal.querySelector('.social .linkedin')
      },
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

    // Update social media info
    let {email, facebook, linkedin} = this.data

    if (!email || email.trim() === '') {
      this.modalElements.social.mail.style.display = 'none'
    } else {
      this.modalElements.social.mail.style.display = 'block'
      this.modalElements.social.mail.href = 'mailto:' + email
    }

    if (!facebook || facebook.trim() === '') {
      this.modalElements.social.facebook.style.display = 'none'
    } else {
      this.modalElements.social.facebook.style.display = 'block'
      this.modalElements.social.facebook.href = facebook
    }

    if (!linkedin || linkedin.trim() === '') {
      this.modalElements.social.linkedin.style.display = 'none'
    } else {
      this.modalElements.social.linkedin.style.display = 'block'
      this.modalElements.social.linkedin.href = linkedin
    }


    // Call list generator for the rest of the data
    this.modalElements.list.innerHTML = ''

    let {teaching} = this.data

    if (teaching && teaching.trim() !== '') {
      this.modalElements.list.appendChild(generateList('Teaching', teaching.split(',')))
    }

    let {paper1, paper2, paper3, paper4, paper5} = this.data
    let papers = [paper1, paper2, paper3, paper4, paper5].filter(x => x !== '')

    if (papers.length > 0) {
      this.modalElements.list.appendChild(generateList('Top papers', papers))
    }
  }

  /**
   * Toggles for modal open/close
   */
  openModal (e) {
    this.saveDataAndUpdate(e.currentTarget.dataset.person)
    this.modal.classList.add('open')
  }

  closeModal (e) {
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
