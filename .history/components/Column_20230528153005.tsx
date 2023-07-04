
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

function Column({id, todos, index} :Props) {
  return (
      <Draggable>
          {(provide) => (
              <div
                  {...provide.draggableProps}
                  {...provide.dragHandleProps}
                  ref
              >
                  
              </div>
          )}
    </Draggable>
  )
}

export default Column   