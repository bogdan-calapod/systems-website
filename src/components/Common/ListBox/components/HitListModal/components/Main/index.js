/**
 * Main display component for student hit list
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SectionTitle from 'components/Common/SectionTitle'
import YearSelector from '../YearSelector'
import Table from '../Table'

const propTypes = {
  setYear: PropTypes.func,
  years: PropTypes.arrayOf(PropTypes.string),
  selectedYear: PropTypes.string,
  abbreviation: PropTypes.string
}

const defaultProps = {
  abbreviation: ''
}

const ModalTitle = styled(SectionTitle)`
  font-size: 30px;
  padding: 0;

  img {
    height: 50px;
    margin-right: 10px;
  }
`

const Container = styled.div`
  overflow: auto;
  height: 100%;
`

class Main extends Component {
  get tables () {
    let {tables} = this.props

    return tables.map((x, i) => <Table key={i} data={x} />)
  }

  render () {
    let {setYear, years, selectedYear, abbreviation} = this.props

    return (
      <Container>
        <ModalTitle left>
          <img src={'/courses/' + abbreviation.toLowerCase() + '.svg'} alt='' />
          Student hit list
        </ModalTitle>

        <YearSelector setYear={setYear}
          years={years}
          selectedYear={selectedYear} />

        {this.tables}
      </Container>
    )
  }
}

Main.propTypes = propTypes
Main.defaultProps = defaultProps

export default Main
