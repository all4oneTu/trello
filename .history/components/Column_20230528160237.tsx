
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}
const idToColumnText: {
    [key in TypedColumn]: string
} = {
    todo: "To Do",
    inprogress : 
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
                  <Droppable droppableId={index.toString()} type='card'>
                      {(provided ,snapshot) => (
                          <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"}`}
                          >
                              <h2>{ id}</h2> 
                          </div>
                      )}
                  </Droppable>
              </div>
          )}
    </Draggable>
  )
}

export default Column   