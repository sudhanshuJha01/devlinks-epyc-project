import { create } from "zustand";

export const useLinkDataStore = create((set) => ({
  data: {},
  presentIndex: 0,


  setPresentIndex: (index) => set((state) => ({ presentIndex: index })),

  
  addPlatform: (obj) =>
    set((state) => {
      if (obj.name !== "Select your data") {
        return {
          data: {
            ...state.data,
            [obj.id]: {
              ...state.data[obj.id],
              ...obj,                
            },
          },
        };
      }else{
        return {
            name: "",
            value: "",
            icon: "",
            color: "", 
            url: ""  
        }
      }
    }),


  removePlatform: (id) =>
    set((state) => {
      const newData = { ...state.data };
      delete newData[id]; 
      return { data: newData };
    }),
}));





// import { create } from "zustand";

// export const useLinkDataStore = create((set) => ({
//   data: {},
//   presentIndex: 0,
//   setPresentIndex: (index) => set((state) => ({ presentIndex: index })),
//   addPlatform: (obj) =>
//     set((state) => ({
//       data: {
//         ...state.data,
//         [obj.id]: {
//           ...state.data[obj.id],
//           ...obj
//         },
//       },
//     })),
//     removePlatform: (id) => set((state) => {
//       const newData = { ...state.data };
//       delete newData[id];
//       return { data: newData };
//     })
  
    
// }));
