import { create } from 'zustand'

interface BoardStore { 
    board: Board | null;
    getBoard:()=>void;
}

const useBoardStore = create((set) => ({
    board: null,
    getBoard: () => { 

    }
}))