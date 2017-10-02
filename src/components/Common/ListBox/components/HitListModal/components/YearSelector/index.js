/**
 * Year selector
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  setYear: PropTypes.func,
  years: PropTypes.arrayOf(PropTypes.string),
  selectedYear: PropTypes.string
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Year = styled.div`
  text-align: center;
  background-color: #e6e6e6;

  flex: 1;

  padding: 5px;

  cursor: pointer;

  transition: 0.4s background;

  &:not(:last-child) {
    border-right: 1px solid white;
  }

  &:hover,
  &.active {
    background-color: #ccc;
  }
`

class YearSelector extends Component {
  get years () {
    let {selectedYear, setYear} = this.props
    let getClass = x => x === selectedYear ? 'active' : ''

    return this.props.years.map(
      (x, i) => <Year className={getClass(x)}
        onClick={_ => setYear(x)}
        key={i}>
        {x}
      </Year>
    )
  }

  render () {
    return (
      <Container>
        {this.years}
      </Container>
    )
  }
}

YearSelector.propTypes = propTypes

export default YearSelector
