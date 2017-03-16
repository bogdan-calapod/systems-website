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

    this.entries = toArray(document.querySelectorAll(root + 'tbody tr'))
    this.yearFilters = toArray(this.modal.querySelectorAll('.yearSelector li'))

    // Binds
    this.buttonClickEvent = this.buttonClickEvent.bind(this)
    this.enableModal = this.enableModal.bind(this)
    this.disableModal = this.disableModal.bind(this)
    this.filterByCourse = this.filterByCourse.bind(this)
    this.filterByYear = this.filterByYear.bind(this)

    this.addEvents()
  }

  addEvents () {
    this.hitlistButtons.forEach(
      x => x.addEventListener('click', this.buttonClickEvent)
    )

    this.modal.addEventListener('click', this.disableModal)
    this.modal.querySelector('.content').addEventListener(
      'click',
      e => e.stopPropagation()
    )

    this.yearFilters.forEach(
      x => x.addEventListener('click', this.filterByYear)
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
      .filterByYear()
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
    return this
  }

  filterByCourse (course) {
    this.entries.forEach(
      e => {
        if (e.dataset.course === course) {
          e.style.display = 'table-row'
        } else {
          e.style.display = 'none'
        }
      }
    )

    return this
  }

  filterByYear (e) {
    let target

    if (!e) {
      target = this.yearFilters[0]
    } else {
      target = e.currentTarget
    }

    let year = target.textContent

    this.yearFilters.forEach(x => x.classList.remove('active'))

    target.classList.add('active')

    this.entries.filter(x => x.dataset.course === this.course)
      .forEach(x => {
        let entryYear = x.textContent.split('.').slice(-1)[0]

        if (year === entryYear) {
          x.style.display = 'table-row'
        } else {
          x.style.display = 'none'
        }
      })

    return this
  }
}

// Instantiate the class if we are on bachelor or master page
let page = window.location.href

if (page.includes('bachelor') || page.includes('master')) {
  new CoursesModal() // eslint-disable-line no-new
}
