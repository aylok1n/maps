import type { AnyLayer, GeoJSONSourceRaw } from "mapbox-gl";
import { writable } from "svelte/store";
import type IExit from "../interfaces/exits";

interface initialState {
  source: GeoJSONSourceRaw,
  layer: AnyLayer,
  isShow: boolean,
  loading: boolean,
  error: any
}

const initialState: initialState = {
  source: {
    type: "geojson",
    data: null,
  },
  layer: {
    id: "exits-circle",
    type: "circle",
    source: "exits",

    paint: {
      "circle-color": "#FF0000",
      "circle-stroke-width": 2.5,
      "circle-stroke-color": "white",
    },
  },
  isShow: true,
  loading: false,
  error: null
}

const mapExits = writable<initialState>(initialState)

export const toggleExits = (value?: boolean) => {
  mapExits.update((state) => ({
    ...state,
    isShow: value === undefined ? !state.isShow : value
  }))
}

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

export const setExits = (exits: IExit) => {
  mapExits.update((state) => ({
    ...state,
    loading: false,
    error: false,
    source: { ...state.source, data: exits as any }
  }))
}

export default mapExits
