import { database } from '@/appwrite';
import { getTodoGroupedByColumn } from '@/lib/getTodoGroupedByColumn';
import { create } from 'zustand'

interface BoardState { 
    board: Board
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;
    searchString: string;
    setSearchString : (searchString: string) => void;
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
        await database.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_COLLECTION_ID!,
            todo.$id,
            {
                title: todo.title,
                status: columnId
            }
        )
    },
    
}))
