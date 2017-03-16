/**
 * Class that manages
 * interactions with the courses modal
 */

// Convert to array for easier manipulation
// of nodes
function toArray (domList) {
  return [].slice.call(domList)
}

class CoursesModal {
  constructor () {
    let root = '.courseList '

    // Defines

    this.modal = document.querySelector(root + '.modal')
    this.icon = this.modal.querySelector('.title img')

    this.hitlistButtons = toArray(document.querySelectorAll(root + 'button.hitlist'))

    // Binds
    this.buttonClickEvent = this.buttonClickEvent.bind(this)
    this.enableModal = this.enableModal.bind(this)
    this.disableModal = this.disableModal.bind(this)

    this.addEvents()
  }

  addEvents () {
    this.hitlistButtons.map(
      x => x.addEventListener('click', this.buttonClickEvent)
    )

    this.modal.addEventListener('click', this.disableModal)
    this.modal.querySelector('.content').addEventListener(
      'click',
      e => e.stopPropagation()
    )
  }

  /**
   * Enable modal and filter displayed data
   * based on course
   *
   * @param {event} e
   */
  buttonClickEvent (e) {
    let course = e.currentTarget.dataset.course
    this.course = course

    this.enableModal()
      .updateModal(course)
      .filterByCourse(course)
  }

  enableModal () {
    this.modal.classList.add('open')
    return this
  }

  disableModal (e) {
    this.modal.classList.remove('open')
  }

  /**
   * Update the modal icon and class
   * @param {string} course
   */
  updateModal (course) {
    this.modal.classList.add(course)
    this.icon.src = '/img/courses/' + course.toLowerCase() + '.svg'
  }

  filterByCourse (course) {
    
  }
}

// Instantiate the class if we are on bachelor or master page
let page = window.location.href

if (page.includes('bachelor') || page.includes('master')) {
  new CoursesModal() // eslint-disable-line no-new
}
