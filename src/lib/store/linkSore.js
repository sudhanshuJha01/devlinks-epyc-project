import { create } from 'zustand';
import { nanoid } from 'nanoid'; // Generates unique IDs

export const useLinkStore = create((set) => ({
    links: [{ id: nanoid(), value:1 }], // Renamed to be more descriptive
    linkCount: 0, // Clearer name for the count

    // Add a link with a unique ID
    addLink: (data) => set((state) => ({
        links: [...state.links, { id: nanoid(), value: data}],
        linkCount: state.linkCount + 1
    })),

    // Remove a link by its unique ID
    removeLink: (id) => set((state) => ({
        links: state.links.filter((link) => link.id !== id)
    })),

    
    clearLinks: () => set(() => ({
        links: [],
        linkCount: 0
    }))
}));
