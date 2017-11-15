/**
 * Main display component for student hit list
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Markdown from 'react-markdown'

import SectionTitle from 'components/Common/SectionTitle'
import YearSelector from '../YearSelector'
import Table from '../Table'

const propTypes = {
  setYear: PropTypes.func,
  years: PropTypes.arrayOf(PropTypes.string),
  selectedYear: PropTypes.string,
  abbreviation: PropTypes.string,
  tables: PropTypes.array,
  announcements: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string,
    text: PropTypes.string
  }))
}

const defaultProps = {
  abbreviation: '',
  years: [],
  tables: [],
  announcements: []
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

const Announcement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

class Main extends Component {
  get tables () {
    let {tables} = this.props

    return tables.map((x, i) => <Table key={i} data={x} />)
  }

  get announcement () {
    const {selectedYear, announcements} = this.props

    let selectedAnnouncement = announcements
      .filter(x => x.year === selectedYear)

    console.log(announcements, selectedYear, selectedAnnouncement)

    if (selectedAnnouncement.length === 0) {
      return ''
    }

    return selectedAnnouncement[0].text

    // return 'In 2017-2018 there will be awarded 58 USO badges:\n* 8 badges for midterm results\n* 8 badges for lecture engagement\n* 18 badges for lab activity\n* 16 badges for final exam results\n* 8 extra badges for digital engagement on cs.curs.pub.ro and Facebook'
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

        <Announcement>
          <Markdown source={this.announcement} />
        </Announcement>
        {this.tables}
      </Container>
    )
  }
}

Main.propTypes = propTypes
Main.defaultProps = defaultProps

export default Main
