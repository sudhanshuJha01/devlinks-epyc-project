import { create } from "zustand";

export const useAddCounterStore = create((set) => ({
    addCnt:0,
    error:false,
    setAddCounter:()=>set((state)=>({addCnt:state.addCnt+1})),
    setGlobalError:(err)=>set((state)=>({error:err}))
}));