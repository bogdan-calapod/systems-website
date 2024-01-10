/**
 * PhD page presentational component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SectionTitle from 'components/Common/SectionTitle'
import ListBox from 'components/Common/ListBox'

import styled from 'styled-components'

const propTypes = {
  projects: PropTypes.array
}

const defaultProps = {
  projects: []
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

class PhD extends Component {
  render () {
    let {projects} = this.props

    return (
      <div>
        <Container>
          <SectionTitle> PhD </SectionTitle>
          <ListBox
            title='PhD Candidates'
            type='people'
            data={projects}
            wide />
        </Container>
      </div>
    )
  }
}

PhD.propTypes = propTypes
PhD.defaultProps = defaultProps

export default PhD
