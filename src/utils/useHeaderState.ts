import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface HeaderState {
  menuSelected: number
  setMenuSelected: (index: number) => void
}

export const useHeaderState = create<HeaderState>()(
  persist(
    (set) => ({
      menuSelected: 0,
      setMenuSelected: (index) => set({ menuSelected: index }),
    }),
    {
      name: 'header-state',
    }
  )
)