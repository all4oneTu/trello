import React from 'react'

type Props = {
    todo: Todo,
    index: number,
    id: TypedColumn,
    indderRef: (element: HTMLElement | null) => void,
    draggableProps: Frag
}

function TodoCard({}:Props) {
  return (
    <div>TodoCard</div>
  )
}

export default TodoCard