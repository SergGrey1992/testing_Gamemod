import { create } from 'zustand'

export type HeaderState = {
    isOpen: boolean
    toggleOpen: () => void
}

export const useHeader = create<HeaderState>((set) => ({
    isOpen: false,
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))
