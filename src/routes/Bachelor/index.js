/**
 * Home Routing Component
 */

import React, { Component } from 'react'

import Header from 'components/Common/Header'
import People from 'components/People'
import SectionTitle from 'components/Common/SectionTitle'
import ListBox from 'components/Common/ListBox'

import styled from 'styled-components'

let courses = [
  {
    'type': 'bachelor',
    'abbreviation': 'USO',
    'name': 'Operating Systems Usage',
    'description': 'This course familiarizes 1st year students with uses of Operating Systems. Linux is used as a platform for introducing Operating Systems concepts such as processes and files.',
    'presentation': 'uso.pdf\n'
  },
  {
    'type': 'bachelor',
    'abbreviation': 'RL',
    'name': 'Computer Networks',
    'description': 'This course guides students in understanding the design and functioning of Computer Networks.',
    'presentation': 'rl.pdf'
  },
  {
    'type': 'bachelor',
    'abbreviation': 'SO',
    'name': 'Operating Systems',
    'description': 'This course supports students towards a more advanced understanding of Operating Systems.',
    'presentation': 'so.pdf'
  },
  {
    'type': 'bachelor',
    'abbreviation': 'SO2',
    'name': 'Operating Systems Design',
    'description': 'This course introduces students into the internal mechanics of Operating Systems.',
    'presentation': 'so2.pdf'
  },
  {
    'type': 'bachelor',
    'abbreviation': 'PR',
    'name': 'Network Design',
    'description': 'This course familiarizes students with Network Design concepts such as switching and routing.'
  }
]

const Container = styled.div`
  background-color: white;
`

const Lists = styled.div`
  display: flex;
  justify-content: center;
`

class Bachelor extends Component {
  render () {
    return (
      <div>
        <Header />
        <Container>
          <SectionTitle> Bachelor </SectionTitle>
          <Lists>
            <ListBox
              title='Courses'
              type='course'
              data={courses} />
          </Lists>
        </Container>
        <People />
      </div>
    )
  }
}

export default Bachelor
