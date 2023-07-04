import { create } from 'zustand'

interface BoardStore { 
    board: Board
    getBoard:()=>void;
}

const useBoardStore = create<BoardS>((set) => ({
    board: null,
    getBoard: () => { 
        
    }
}))