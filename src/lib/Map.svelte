<script lang="ts">
  import {
    Map,
    GeolocateControl,
    NavigationControl,
    FullscreenControl,
  } from "mapbox-gl";
  import { onMount } from "svelte";
  import "mapbox-gl/dist/mapbox-gl.css";
  import mapExits from "../stores/exits";
  import mapStations from "../stores/stations";
  import { getExits } from "../api/exits";
  import { getStations } from "../api/stations";

  const { VITE_MAPBOX_ACCESS_TOKEN, VITE_MAP_LIGHT_URL, VITE_MAP_DARK_URL } =
    import.meta.env;

  let map: Map | null = null;
  onMount(() => {
    getExits();
    getStations();
    map = new Map({
      container: "__next",
      style: VITE_MAP_DARK_URL,
      accessToken: VITE_MAPBOX_ACCESS_TOKEN,
      center: [37.617633, 55.75582],
      zoom: 11,
      attributionControl: false,
    })
      .addControl(new NavigationControl({ showCompass: false }))
      .addControl(new GeolocateControl())
      .addControl(new FullscreenControl());

    map.once("load", subscribe);
  });

  const subscribe = () => {
    mapExits.subscribe((exits) => {
      if (!exits.loading) {
        if (exits.isShow) {
          map.addSource("exits", exits.source);
          map.addLayer(exits.layer);
        } else {
          map.removeLayer(exits.layer.id);
          map.removeSource("exits");
        }
      }
    });
    mapStations.subscribe((stations) => {
      if (!stations.loading) {
        if (stations.isShow) {
          map.addSource("stations", stations.source);
          map.addLayer(stations.layer);
        } else {
          map.removeLayer(stations.layer.id);
          map.removeSource("stations");
        }
      }
    });
  };
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
