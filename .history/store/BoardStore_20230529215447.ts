import { getTodoGroupedByColumn } from '@/lib/getTodoGroupedByColumn';
import { create } from 'zustand'

interface BoardState { 
    board: Board
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateTodoInDB : (todo : Todo, columnId : TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    board: {
        columns : new Map<TypedColumn, Column>()
    },
    getBoard: async() => { 
        const board = await getTodoGroupedByColumn();
        set({ board });
    },
    setBoardState: (board) => set({ board }),
    updateTodoInDB: async (todo, columnId) => {
        aw
}))
