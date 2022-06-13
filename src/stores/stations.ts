import { writable } from "svelte/store";
import type { AnyLayer, GeoJSONSourceRaw } from "mapbox-gl";
import type IStation from "../interfaces/stations";
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
    id: "stations-circle",
    type: "circle",
    source: "stations",

    paint: {
      "circle-color": "#FFFF00",
      "circle-stroke-width": 2.5,
      "circle-stroke-color": "white",
    },
  },
  isShow: true,
  loading: false,
  error: null
}

const mapStations = writable<initialState>(initialState)

export const toggleStations = (value?: boolean) => {
  mapStations.update((state) => ({
    ...state,
    isShow: value === undefined ? !state.isShow : value
  }))
}

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

export const setStations = (stations: IStation) => {
  mapStations.update((state) => ({
    ...state,
    loading: false,
    error: false,
    source: { ...state.source, data: stations as any }
  }))
}

export default mapStations
