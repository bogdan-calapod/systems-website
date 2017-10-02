/**
 * Bachelor page presentational component
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

const projects = [
  {
    "type": "bachelor",
    "name": "On-screen display for confidential information",
    "url": "https://docs.google.com/document/d/1ThAaNdptyB8gz117LTx7E-MmKeaSKqhVzdzpEyyfS58/edit",
    "teachers": "Răzvan Rughiniș, Tudor Pârcălabu"
  },
  {
    "type": "bachelor",
    "name": " Mapping road quality",
    "url": "https://drive.google.com/open?id=1yzZc2xec2tq6SXvuS8yA8Vtt1bTu_GuYmZyJjru3mrU",
    "teachers": "Dragos Niculescu"
  },
  {
    "type": "bachelor",
    "name": " Profilarea procesării de pachete",
    "url": "https://docs.google.com/document/d/1Uiy_WJoK8ZBl7Z30JrDM-R7e5FA5TYlLRbMQVQPonEA/edit",
    "teachers": "Dragos Niculescu"
  },
  {
    "type": "bachelor",
    "name": " Trek Calculator",
    "url": "https://docs.google.com/document/d/1r0UhocP8gMf0XLvwFXyT0re2KyeBEU498RtS4K73wDQ/edit",
    "teachers": "Dragos Niculescu"
  },
  {
    "type": "bachelor",
    "name": " Aplicație distribuție poze",
    "url": "https://docs.google.com/document/d/1CrospbvMFvvvPbCpfMWALFUpvTAea-EFQtG2_Mo9W9w/edit",
    "teachers": "Dragos Niculescu"
  },
  {
    "type": "bachelor",
    "name": " Comunicație optică cameră - ecran",
    "url": "https://docs.google.com/document/d/1MQLqm61PsvJtSjhZa3n7F5XMZZZogwtDxZbEubs4ujM/edit",
    "teachers": "Dragos Niculescu"
  }
]

const Container = styled.div`
  background-color: white;
`

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
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
            <ListBox
              title='Projects'
              type='project'
              data={projects}
              showFilter />
          </Lists>
        </Container>
        <People />
      </div>
    )
  }
}

export default Bachelor
