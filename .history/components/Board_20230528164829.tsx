'use client'
import { useBoardStore } from '@/store/BoardStore'
import { stat } from 'fs'
import React, { useEffect } from 'react'
import {DragDropContext, DropResult, Droppable} from 'react-beautiful-dnd'
import Column from './Column'
export default function Board() {

    const [board, getBoard, setBoardState] = useBoardStore((state) => [state.board, state.getBoard, state.setBoardState])
    useEffect(() => {
        getBoard()
    }, [getBoard])
  console.log(board)
  const handleOnDragEnd = (result: DropResult) => { 
    const { destination, source, draggableId, type } = result
    
    if (!destination) return 
    //handle column drag
    if (type == "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed)
      const rearangedColumns = new Map(entries)
      setBoardState({
        ...board, columns: rearangedColumns
      })
    }
    
    const columns = Array.from(board.columns)
    const startColIndex = columns[Number(source.droppableId)]
    const finishColIndex = columns[Number(destination.droppableId)]

    const startCol: Column = {
      id : startColIndex[0],
      todos : startColIndex[1].todos
    }
    const finishCol: Column = {
      id: finishColIndex[0],
      todos : finishColIndex[1].todos
    }
    if(!startCol || !finishCol) return
    
  }
    return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
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
