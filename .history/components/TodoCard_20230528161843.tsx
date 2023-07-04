import React from 'react'

type Props = {
    todo: Todo,
    index: number,
    id: TypedColumn,
    indderRef: (element: HTMLElement | null) => void,
    draggableProps: DraggablePr
}

function TodoCard({}:Props) {
  return (
    <div>TodoCard</div>
  )
}

export default TodoCard