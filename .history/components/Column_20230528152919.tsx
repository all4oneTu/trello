
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    id: TypedColumn,
    tod
}

function Column({id, todos, index} :Props) {
  return (
      <Draggable>
          {(provide) => (
              <div>
                  
              </div>
          )}
    </Draggable>
  )
}

export default Column   