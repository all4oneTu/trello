import { create } from 'zustand'

interface BoardStore { 
    board : 
}

const useBoardStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))