/**
 * PhD page presentational component
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
  collaborators: PropTypes.array,
  people: PropTypes.array
}

const defaultProps = {
  projects: [],
  collaborators: [],
  people: []
}

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    max-width: 500px;
  }

  > p {
    max-width: 800px;
    margin-bottom: 40px;
    display: block;
    text-align: center;
  }
`

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class PhD extends Component {
  render () {
    let {projects, collaborators, people} = this.props

    return (
      <div>
        <Header small />
        <Container>
          <SectionTitle> PhD </SectionTitle>
          <p>
            It all starts with meeting new teachers, mentors, colleagues and friends. Get a first taste of engineering in Operating Systems and Computer Networks, then go in depth to explore Design and security challenges. Test your insights with a diploma project in Systems’ research group, and break new ground through mentored research and development.
          </p>
          <Lists>
            <ListBox
              title='Projects'
              type='people'
              data={projects}>
              <p>
                Proident minim culpa veniam sunt velit duis nostrud enim tempor. Do irure eiusmod Lorem sunt anim occaecat nulla ipsum. Fugiat non excepteur ut laboris enim laborum nulla voluptate. 
              </p>
            </ListBox>
            <ListBox
              title='Collaborators'
              type='people'
              data={collaborators} />
          </Lists>
        </Container>
        <People data={people} />
      </div>
    )
  }
}

PhD.propTypes = propTypes
PhD.defaultProps = defaultProps

export default PhD
