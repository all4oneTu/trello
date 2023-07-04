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
  console.log(board)
  const handleOnDragEnd = (result: Dr) => {
    return (
      <DragDropContext onDragEnd={e => handleOnDragEnd}>
          <Droppable droppableId='board' direction='horizontal' type='column'>
              {(provided) => (
            <div
             className='grid frid-col-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
                  {
                    Array.from(board.columns.entries()).map(([id, column], index) => (
                      <Column
                        key={id}
                        id={id}
                        todos={column.todos}
                        index={index}
                      />
                    ))
                          }
                </div>
              )}
          </Droppable>
  </DragDropContext>
  )
}
