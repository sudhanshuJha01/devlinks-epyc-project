import { create } from 'zustand';

export const useIndexStore = create((set) => ({
  presentIndex:0,
  setPresentIndex: (index)=>set((state)=>({presentIndex:index}))
}));

// const useStore = create((set) => ({
//     count: 1,
//     inc: () => set((state) => ({ count: state.count + 1 })),
//   }))