import { create } from "zustand";

export const useProfileStore = create((set) => ({
    firstname:"",
    lastname:"",
    email:"",
    setFirstname:(fn)=>set((state)=>({firstname:fn})),
    setLastname:(ln)=>set((state)=>({lastname:ln})),
    setEmail:(eml)=>set((state)=>({email:eml}))
}));

