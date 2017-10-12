/**
 * Lists container
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Person from 'components/Common/Person'
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
  max-width: ${props => props.wide ? 'none' : '800px'};
  max-height: 900px;
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 30px 30px 30px;

  
  @media screen and (max-width: 900px) {
    width: 300px;
    max-height: none;
  }

  > h1 {
    font-weight: 800;
    margin: 0;
    padding: 0;
  }

  > div div:not(.rodal-dialog) {
    cursor: default;
    margin: 10px 0;
  }
  
  img {
    max-width: 100px;
    max-height: 100px;
  }
`

const List = styled.div`
  display: ${props => props.wide ? 'flex' : 'block'};
  flex-wrap: wrap;
`

const Filter = styled.input`
  border: 1px solid gray;
  background-color: transparent;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  height: 40px;

  font-size: 16px;
  font-family: 'Work Sans', sans-serif;

  display: flex;
  align-items: center;

  outline: none;
`

class ListBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      textFilter: ''
    }
  }

  getComponent () {
    switch (this.props.type) {
      case 'course':
        return CourseBox
      case 'project':
        return Project
      case 'people':
        return Person
      default:
        return null
    }
  }

  get filter () {
    let { showFilter } = this.props

    if (showFilter) {
      return <Filter placeholder='Filter'
        onChange={this.changeFilter}
        type='text' />
    } else {
      return null
    }
  }

  get content () {
    let {data} = this.props
    let {textFilter} = this.state

    if (data.length === 0) {
      return null
    }

    let Component = this.getComponent()

    return data
    .filter(x => JSON.stringify(x).toLowerCase().includes(textFilter))
    .filter(x => x.name !== 'BLANK')
    .map(
      (x, i) => <Component noModal data={x} key={i} />
    )
  }

  changeFilter = e => this.setState({...this.state,
    textFilter: e.currentTarget.value.toLowerCase()
  })

  render () {
    return (
      <Container {...this.props}>
        <SectionTitle left> {this.props.title} </SectionTitle>
        {this.filter}
        {this.props.children}
        <List {...this.props}>
          {this.content}
        </List>
      </Container>
    )
  }
}

ListBox.propTypes = propTypes
ListBox.defaultProps = defaultProps

export default ListBox
