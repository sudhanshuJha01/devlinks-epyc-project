import { create } from 'zustand';

export const useLinkDataStore = create((set) => ({
  data: [],
  addPlatform: (obj) => {
    set((state) => ({
      data: [...state.data, obj], // Spread state.data correctly
    }));
  },
}));
