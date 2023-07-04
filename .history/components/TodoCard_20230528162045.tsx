import React from 'react'
import {DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd'

type Props = {
    todo: Todo,
    index: number,
    id: TypedColumn,
    indderRef: (element: HTMLElement | null) => void,
    draggableProps: DraggableProvidedDraggableProps,
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    
}:Props) {
  return (
    <div>TodoCard</div>
  )
}

export default TodoCard