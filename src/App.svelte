<script lang="ts">
  import Map from "./lib/Map.svelte";
  import ThemeToggle from "./lib/ThemeToggle.svelte";
</script>

<div>
  <ThemeToggle />
  <Map /> 
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
  }
</style>
