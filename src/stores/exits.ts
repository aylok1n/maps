import type { Exit } from "src/interfaces/exits";
import { writable } from "svelte/store";

interface initialState {
  loading: boolean,
  error: boolean,
  data: Exit[],
}

const initialState: initialState = {
  loading: false,
  error: false,
  data: [],
}

const mapExits = writable<initialState>(initialState)

export const setLoading = () => {
  mapExits.update((state) => ({
    ...state,
    loading: true,
    error: false
  }))
}

export const setError = (error: any) => {
  mapExits.update((state) => ({
    ...state,
    loading: false,
    error: error
  }))
}

export const setExits = (exits: Exit[]) => {
  mapExits.update((state) => ({
    ...state,
    loading: false,
    error: false,
    data: exits
  }))
}

export default mapExits
