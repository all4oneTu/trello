
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

function Column({id, todos, index} :Props) {
  return (
      <Draggable draggableId={id} index={index}>
          {(provide) => (
              <div
                  {...provide.draggableProps}
                  {...provide.dragHandleProps}
                  ref={provide.innerRef}
              >
                  <Droppable droppableId={index.toString()} ty></Droppable>
              </div>
          )}
    </Draggable>
  )
}

export default Column   