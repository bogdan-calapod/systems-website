/**
 * Lists container
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Project from './components/Project'
import CourseBox from './components/CourseBox'
import SectionTitle from 'components/Common/SectionTitle'

const propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
}

const defaultProps = {
  data: []
}

const Container = styled.div`
  background-color: #E6E6E6;
  max-width: 800px;
  padding: 10px;
  margin: 0 30px 30px 30px;

  > h1 {
    font-weight: 800;
    margin: 0;
    padding: 0;
  }
`

class ListBox extends Component {
  getComponent () {
    switch (this.props.type) {
      case 'course':
        return CourseBox
      case 'project':
        return Project
      default:
        return null
    }
  }

  getContent () {
    let {data} = this.props

    if (data.length === 0) {
      return null
    }

    let Component = this.getComponent()

    return data.map(
      x => <Component data={x} />
    )
  }

  render () {
    return (
      <Container>
        <SectionTitle left> {this.props.title} </SectionTitle>
        {this.props.children}
        {this.getContent()}
      </Container>
    )
  }
}

ListBox.propTypes = propTypes
ListBox.defaultProps = defaultProps

export default ListBox
