import { create } from 'zustand'

interface BoardState { 
    board: Board
    getBoard:()=>void;
}

const useBoardStore = create<BoardS>((set) => ({
    board: null,
    getBoard: () => { 
        
    }
}))