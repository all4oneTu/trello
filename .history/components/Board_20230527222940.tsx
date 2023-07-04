'use client'
import { useBoardStore } from '@/store/BoardStore'
import { stat } from 'fs'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
export default function Board() {

    const [board, getBoard] = useBoardStore((state) => [state.board, state.getBoard])
    useEffect(() => {
        getBoard()
     }, [getBoard])
    return (
      <h1>Board</h1>
//       <DragDropContext>
//           <Droppable droppableId='board' direction='horizontal' type='column'>
//               {(provided) => (
//                   <div>
                      
//                   </div>
//               )}
//           </Droppable>
//   </DragDropContext>
  )
}
