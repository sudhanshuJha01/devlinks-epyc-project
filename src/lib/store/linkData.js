import { create } from "zustand";

// export const useLinkDataStore = create((set) => ({
//   data: {index:{
//     name: 'github',
//   }
//   },
//   presentIndex: 0,
//   setPresentIndex: (index) => set((state) => ({ presentIndex: index })),
//   addPlatform: (obj) =>set((state)=>({data:{...state.data , obj}}))
// }))


export const useLinkDataStore = create((set) => ({
  data: {},
  presentIndex: 0,
  setPresentIndex: (index) => set((state) => ({ presentIndex: index })),
  addPlatform: (obj) =>
    set((state) => ({
      data: {
        ...state.data,
        [obj.index]: {
          ...state.data[obj.index],
          ...obj
        },
      },
    })),
}));
