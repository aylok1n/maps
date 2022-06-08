import type { Station } from "src/interfaces/stations";
import { writable } from "svelte/store";

interface initialState {
  loading: boolean,
  error: boolean,
  data: Station[],
}

const initialState: initialState = {
  loading: false,
  error: false,
  data: [],
}

const mapStations = writable<initialState>(initialState)

export const setLoading = () => {
  mapStations.update((state) => ({
    ...state,
    loading: true,
    error: false
  }))
}

export const setError = (error: any) => {
  mapStations.update((state) => ({
    ...state,
    loading: false,
    error: error
  }))
}

export const setStations = (stations: Station[]) => {
  mapStations.update((state) => ({
    ...state,
    loading: false,
    error: false,
    data: stations
  }))
}

export default mapStations
