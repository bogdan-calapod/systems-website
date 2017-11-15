/**
 * Course hit list modal
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'rodal'

import Main from './components/Main'

const propTypes = {
  data: PropTypes.array,
  announcements: PropTypes.array,
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

const defaultProps = {
  visible: false,
  announcements: [],
  onClose: _ => {},
  data: []
}

function unique (list) {
  return list.filter((x, i) => list.indexOf(x) === i)
}

class HitListModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      year: '2017'
    }
  }

  setYear = year => this.setState({...this.state, year: year.toString()})

  get data () {
    return this.props.data.filter(x => x.date.includes(this.state.year))
  }

  get years () {
    let years = this.props.data.map(x => x.date.split('.')[2])
    return unique(years).sort().reverse()
  }

  get tables () {
    let values = ['Midterm', 'Lab', 'Lecture', 'Final', 'Community', 'Extra']
    let tables = {}
    let data = this.data

    values.forEach(
      category => tables[category] = data.filter(x => x.pin === category)
    )

    return values.map(x => {return {data: tables[x], type: x}})
  }

  get modalSize () {
    if (window.innerWidth < 900) {
      return {
        width: 250,
        height: 400
      }
    }
    return {
      width: 1200,
      height: 800
    }
  }

  render () {
    let selectedYear = this.state.year
    let {visible, onClose, abbreviation, announcements} = this.props

    return (
      <Modal visible={visible} onClose={onClose} {...this.modalSize}>
        <Main
          announcements={announcements}
          setYear={this.setYear}
          years={this.years}
          selectedYear={selectedYear}
          tables={this.tables}
          abbreviation={abbreviation}
          />
      </Modal>
    )
  }
}

HitListModal.propTypes = propTypes
HitListModal.defaultProps = defaultProps

export default HitListModal
