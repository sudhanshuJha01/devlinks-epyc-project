import { create } from 'zustand';
import { nanoid } from 'nanoid'; // Generates unique IDs

export const useLinkStore = create((set) => ({
    links: [], 
    linkCount: 0,


    addLink: (data) => set((state) => ({
        links: [...state.links, { id: nanoid(), value: 1+data }],
        linkCount: state.linkCount + 1
    })),

    removeLink: (id) => set((state) => ({
        links: state.links.filter((link) => link.id !== id)
    })),

    
    clearLinks: () => set(() => ({
        links: [],
        linkCount: 0
    }))
}));
