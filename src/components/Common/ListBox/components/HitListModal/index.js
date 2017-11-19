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

  componentDidMount () {
    let years = this.years

    years.forEach(
      year => {
        if (window.location.href.includes('/' + year)) {
          this.setState({...this.state, year})
        }
      }
    )
  }

  setYear = year => this.setState({...this.state, year: year.toString()})

  get data () {
    let {year} = this.state
    let {data} = this.props

    let validM = [1,2,3,4,5,6,7,8,9,10]
    let checkValidCurrentYear = x => {
      let m = validM.filter(z => x.date.includes(z + '.' + year))
      if (m.length === 0) {
        return false
      }

      return true
    }

    return data
      .filter(x => x.date)
      .filter(x => checkValidCurrentYear(x)
        || ((x.date.includes('11.' + parseInt(year - 1, 10))
          || x.date.includes('12.' + parseInt(year - 1, 10)))
        && (!x.date.includes('11.' + parseInt(year, 10))
          || !x.date.includes('12.' + parseInt(year, 10))))
    )
  }

  get years () {
    let {data} = this.props
    let years = data.filter(x => x.date).map(x => x.date.split('.')[2])
    let extraYears = data.filter(x => x.date)
      .filter(x => x.date.includes('11.20') || x.date.includes('12.20'))
      .map(x => x.date.split('.')[2])
    return unique([...years, ...extraYears]).sort().reverse()
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
