import { create } from 'zustand';
import { nanoid } from 'nanoid'; 
export const useLinkDataStore = create((set) => ({
    data:[],
    addPlatfrom: (obj) => {
        set((state) => ({
            data:[...state.data, ...obj],
        }));
    }
}));