/**
 * Table component
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Community from './Community.svg'
import Laboratory from './Laboratory.svg'
import Final from './Final.svg'
import Lecture from './Lecture.svg'
import Midterm from './Midterm.svg'
import Extra from './Extra.svg'

const propTypes = {
  data: PropTypes.object
}

const Cell = styled.div`
  flex: 1;
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin: 5px 0;
  padding: 15px 0;

      
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  img {
    width: 150px;
    margin-right: 15px;
    padding-right: 5px;
  }
`
const Wrapper = styled.div`
  flex: 1;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  ${Cell} {
    font-weight: 600;
  }
`
const Row = styled(Header)`
  padding: 5px;

  &:nth-child(odd) {
    background-color: #eaeaea;
  }

  ${Cell} {
    font-weight: 400;
    text-align: left;
  }
`

class Table extends Component {
  get columns () {
    if (window.innerWidth < 900) {
      return ['course', 'pin', 'id', 'comment']
    } else {
      return ['course', 'pin', 'oldpin']
    }
  }

  get keys () {
    let {data} = this.props.data

    if (data.length === 0) {
      return []
    }

    return Object.keys(data[0]).filter(x => !this.columns.includes(x))
  }

  get header () {
    return this.keys.map(
      (x, i) => <Cell key={i}>{x}</Cell>
    )
  }

  get rows () {
    let {data} = this.props.data
    let keys = this.keys

    return data.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0).map(
      (row, i) => <Row key={i}>
        {keys.map((key, j) => <Cell key={j}>{row[key]}</Cell>)}
      </Row>
    )
  }

  get image () {
    switch (this.props.data.type) {
      case 'Lab':
        return Laboratory
      case 'Community':
        return Community
      case 'Final':
        return Final
      case 'Lecture':
        return Lecture
      case 'Midterm':
        return Midterm
      default:
        return Extra
    }
  }

  render () {
    if (this.props.data.data.length === 0) {
      return null
    }

    return (
      <Container>
        <img src={this.image} alt='' />
        <Wrapper>
          <Header>{this.header}</Header>
          {this.rows}
        </Wrapper>
      </Container>
    )
  }
}

Table.propTypes = propTypes

export default Table
