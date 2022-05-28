import mapboxgl from "mapbox-gl";
import App from "./App.svelte";

// mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const app = new App({
  target: document.getElementById("app"),
});

export default app;
