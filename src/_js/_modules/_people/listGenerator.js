/**
 * Simple list generator
 */

/**
 * Splits a list with a title
 *
 * @param {string} title
 * @param {array} data
 */
export function generateList (title, data) {
  let container = document.createElement('div')
  let titleElem = document.createElement('h1')
  let list = document.createElement('ul')
  let listElem

  // Generate title
  titleElem.innerHTML = title
  container.appendChild(titleElem)

  // Generate entries
  data.forEach(
    x => {
      listElem = document.createElement('li')
      listElem.innerHTML = x.trim()
      list.appendChild(listElem)
    }
  )

  container.appendChild(list)

  return container
}
