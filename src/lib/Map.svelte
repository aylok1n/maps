<script lang="ts">
  import {
    Map,
    GeolocateControl,
    NavigationControl,
    FullscreenControl,
  } from "mapbox-gl";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import isDarkTheme from "../stores/theme";
  import "mapbox-gl/dist/mapbox-gl.css";
  import { getExits } from "../api/exits";
  import mapObjects from "../stores/mapObjects";

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
  });

  console.log($mapObjects);

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
