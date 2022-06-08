<script lang="ts">
  import {
    Map,
    GeolocateControl,
    NavigationControl,
    FullscreenControl,
    Marker,
  } from "mapbox-gl";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import "mapbox-gl/dist/mapbox-gl.css";
  import isDarkTheme from "../stores/theme";
  import { getExits } from "../api/exits";
  import { getStations } from "../api/stations";
  import mapExits from "../stores/exits";
  import mapStations from "../stores/stations";

  const { VITE_MAPBOX_ACCESS_TOKEN, VITE_MAP_LIGHT_URL, VITE_MAP_DARK_URL } =
    import.meta.env;

  let map: Map | null = null;
  onMount(() => {
    map = new Map({
      container: "__next",
      style: get(isDarkTheme) ? VITE_MAP_DARK_URL : VITE_MAP_LIGHT_URL,
      accessToken: VITE_MAPBOX_ACCESS_TOKEN,
      center: [37.617633, 55.75582],
      zoom: 11,
      attributionControl: false,
    })
      .addControl(new NavigationControl({ showCompass: false }))
      .addControl(new GeolocateControl())
      .addControl(new FullscreenControl());

    getExits();
    getStations();

    // mapStations.subscribe(({ data }) => {
    //   data.forEach((station) => {
    //     new Marker({ color: "#FF0000" })
    //       .setLngLat(station.geometry.coordinates)
    //       .addTo(map);
    //   });
    // });

    // mapExits.subscribe(({ data }) => {
    //   data.forEach((exit) => {
    //     new Marker({ color: "#FFFF00" })
    //       .setLngLat(exit.geometry.coordinates)
    //       .addTo(map);
    //   });
    // });

    map.once("load", () => {
      map.addSource("exits", {
        type: "geojson",
        data: "https://apidata.mos.ru/v1/datasets/62207/features?api_key=43afc135bc5b685a193b22ab791caa54",
      });
      map.addLayer({
        id: "exits-circle",
        type: "circle",
        source: "exits",

        paint: {
          "circle-color": "#FF0000",
          "circle-stroke-width": 2.5,
          "circle-stroke-color": "white",
        },
      });
      
      map.addSource("stations", {
        type: "geojson",
        data: "https://apidata.mos.ru/v1/datasets/62888/features?api_key=43afc135bc5b685a193b22ab791caa54",
      });
      map.addLayer({
        id: "stations-circle",
        type: "circle",
        source: "stations",

        paint: {
          "circle-color": "#FFFF00",
          "circle-stroke-width": 2.5,
          "circle-stroke-color": "white",
        },
      });
    });
  });

  isDarkTheme.subscribe((value: boolean) => {
    const newTheme = value ? VITE_MAP_DARK_URL : VITE_MAP_LIGHT_URL;
    if (map) {
      map.setStyle(newTheme);
    }
  });
</script>

<div id="__next" />

<style lang="scss">
  #__next {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
  }
</style>
