import { create } from 'zustand'

export type ModalState = {
    id?: string
    setId: (id?: string) => void
}

export const useStore = create<ModalState>((set) => ({
    id: undefined,
    setId: (id) => set(() => ({ id })),
}))
