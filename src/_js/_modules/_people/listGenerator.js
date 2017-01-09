/**
 * List generator helper for people modal
 */

import marked from 'marked'

function generateTitle (value = '') {
  let title = document.createElement('h1')
  title.innerHTML = value
  return title
}

function getObjectElement (value = {}) {
  // Check if object has the required properties (title and value)
  if (!value.hasOwnProperty('title') || !value.hasOwnProperty('value')) {
    return document.createElement('div')
  }

  // Process and generate the list content
  let container = document.createElement('li')

  let title = document.createElement('h1')
  title.innerHTML = value.title
  container.appendChild(title)

  // We replace the \n in the string with two ASCII codes for newline,
  // so that Markdown can create the correct paragraphs
  let details = marked(value.value.replace(/\\n/g, String.fromCharCode(13) + String.fromCharCode(13)))
  container.innerHTML += details

  return container
}

function generateListContent (data = []) {
  // Quit on empty data
  if (data.length === 0) {
    return null
  }

  // Generate container list and append
  // children

  let container = document.createElement('ul')

  data.forEach(
    value => {
      if (typeof value === 'string') {
        let li = document.createElement('li')
        li.innerHTML = value
        container.appendChild(li)
      } else if (typeof value === 'object') {
        container.appendChild(getObjectElement(value))
      }
    }
  )

  return container
}

export function generateList (data = {}) {
  let container = document.createElement('div')

  // First, get the titles that need to be generated
  let titles = Object.keys(data)

  // Then, generate a list for each element
  titles.forEach(
    title => {
      container.appendChild(generateTitle(title))
      container.appendChild(generateListContent(data[title]))
    }
  )

  return container
}
