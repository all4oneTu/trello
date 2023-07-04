import React from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'

type Props = {
    todo: Todo,
    index: number,
    id: TypedColumn,
    indderRef: (element: HTMLElement | null) => void,
    draggableProps: DraggableProvidedDr
}

function TodoCard({}:Props) {
  return (
    <div>TodoCard</div>
  )
}

export default TodoCard