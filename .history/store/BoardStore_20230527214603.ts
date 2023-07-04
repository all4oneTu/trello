import { create } from 'zustand'

interface BoardState { 
    board: Board
    getBoard:()=>void;
}

const useBoardStore = create<BoardSa>((set) => ({
    board: null,
    getBoard: () => { 
        
    }
}))