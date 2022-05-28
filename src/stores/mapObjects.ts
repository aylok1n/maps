import type { Exit } from "src/interfaces/exits";
import type { Station } from "src/interfaces/stations";
import { writable } from "svelte/store";

interface initialState {
  loading: boolean,
  error: boolean,
  exits: Exit[],
  stations: Station[],
}

const initialState = {
  loading: false,
  error: false,
  exits: {},
  stations: {}
}

const mapObjects = writable(initialState)

export const setLoading = () => {
  mapObjects.update((state) => ({
    ...state,
    loading: true,
    error: false
  }))
}

export const setError = (error: any) => {
  mapObjects.update((state) => ({
    ...state,
    loading: false,
    error: error
  }))
}

export const setExits = (exits: Exit[]) => {
  mapObjects.update((state) => ({
    ...state,
    loading: false,
    error: false,
    exits
  }))
}
export const setStations = (stations: Station[]) => {
  mapObjects.update((state) => ({
    ...state,
    loading: false,
    error: false,
    stations
  }))
}

export default mapObjects
