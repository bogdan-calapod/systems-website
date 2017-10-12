/**
 * Bachelor page presentational component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Common/Header'
import People from 'components/People'
import SectionTitle from 'components/Common/SectionTitle'
import ListBox from 'components/Common/ListBox'

import styled from 'styled-components'

const propTypes = {
  projects: PropTypes.array,
  courses: PropTypes.array,
  people: PropTypes.array
}

const defaultProps = {
  projects: [],
  courses: [],
  people: []
}

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    max-width: 800px;
    margin: 10px auto;
    display: block;
    text-align: center;
  }
`

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class Bachelor extends Component {
  render () {
    let {projects, courses, people} = this.props

    return (
      <div>
        <Header small />
        <Container>
          <SectionTitle> Bachelor </SectionTitle>
          <p>
            It all starts with meeting new teachers, mentors, colleagues and friends. Get a first taste of engineering in Operating Systems and Computer Networks, then go in depth to explore Design and security challenges. Test your insights with a diploma project in Systems’ research group, and break new ground through mentored research and development.
          </p>
          <Lists>
            <ListBox
              title='Courses'
              type='course'
              data={courses} />
            <ListBox
              title='Projects'
              type='project'
              data={projects}
              showFilter>
              <p>
                Register your project until {this.props.date} <a href={this.props.url}> here </a>
              </p>
            </ListBox>
          </Lists>
        </Container>
        <People data={people} />
      </div>
    )
  }
}

Bachelor.propTypes = propTypes
Bachelor.defaultProps = defaultProps

export default Bachelor
