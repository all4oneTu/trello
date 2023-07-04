import { create } from 'zustand'

interface BoardStore { 
    board: ;
    getBoard:()=>void;
}

const useBoardStore = create((set) => ({
    board: null,
    getBoard: () => { 

    }
}))