import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware'
import createSelectors from './selectors'
import { StorageSceneKey } from '../utils'
interface State {
  token: string
  isLogged: boolean
}
interface Action {
  setToken: (token: string) => void
  removeToken: () => void
}
const userStorage: StateStorage = {
  getItem: (key) => {
    const value = localStorage.getItem(key)
    return value ?? null
  },
  setItem: (key, value) => {
    localStorage.setItem(key, value)
  },
  removeItem: (key) => {
    localStorage.removeItem(key)
  },
}
const initialState: State = {
  token: '',
  isLogged: false,
}
const userStore = create<State & Action>()(
  immer(
    persist(
      (set, get) => ({
        token: '',
        isLogged: false,
        setToken: (token) => set({ token, isLogged: true }),
        removeToken: () => set({ token: '', isLogged: false }),
      }),
      {
        //! 注意这里的name是当前这个Zustand模块进行缓存时的唯一key, 每个需要缓存的Zustand模块都必须分配一个唯一key
        name: StorageSceneKey.USER,
        storage: createJSONStorage(() => userStorage),
      }
    )
  )
)
export const useUserStore = createSelectors(userStore)
export function useUserReset() {
  userStore.setState(initialState)
}
