import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  padding: '0.5rem 1rem',
  width: 100,
  marginRight: '1.5rem',
  margin: '1.5rem 0',
  color: 'white',
  textAlign: 'center',
  fontSize: '1rem',
  float: 'left',
  border: '1px solid black',
}

const boxTarget = {
  drop() {
    return { name: 'Dustbin' }
  },
}

@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Dustbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver

    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {isActive ? 'Drag here' : 'Drag here'}
      </div>,
    )
  }
}
