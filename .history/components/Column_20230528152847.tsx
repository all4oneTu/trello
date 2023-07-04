import React from 'react'
import { Draggable } from 'react-beautiful-dnd'



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