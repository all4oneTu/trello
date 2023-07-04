'use client'
import { useBoardStore } from '@/store/BoardStore'
import { stat } from 'fs'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
export default function Board() {

    const getBoard = useBoardStore((state) => state.getBoard   ))
    useEffect(() => {

     }, [])
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
