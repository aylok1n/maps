<script lang="ts">
  import Accordion from "./Accordion.svelte";
  import mapExits, { toggleExits } from "../stores/exits";
  import mapStations, { toggleStations } from "../stores/stations";
  import { get } from "svelte/store";

  $: isSideBar = true;
  $: exits = get(mapExits).isShow;
  $: stations = get(mapStations).isShow;

  mapExits.subscribe(({ isShow }) => {
    exits = isShow;
  });

  mapStations.subscribe(({ isShow }) => {
    stations = isShow;
  });

  $: dataConfig = [
    {
      title: "Станции и выходы",
      data: [
        {
          text: "выходы",
          onclick: (val?: boolean) => toggleExits(val),
          value: exits,
        },
        {
          text: "станции",
          onclick: (val?: boolean) => toggleStations(val),
          value: stations,
        },
      ],
    },
  ];
</script>

<div class={`sidebar__wrapper ${isSideBar && "ml"}`}>
  <div class="sidebar__inside">
    <input type="text" class="sidebar__search" placeholder="Поиск" />
    <div class="accordion-data">
      {#each dataConfig as item}
        <Accordion title={item.title} data={item.data} />
      {/each}
    </div>
  </div>
  <div on:click={() => (isSideBar = !isSideBar)} class="arrow">
    <i class={`fas icon-arrow fa-chevron-${isSideBar ? "left" : "right"}`} />
  </div>
</div>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  p {
    padding: 0;
  }
  @keyframes sidebar_animation {
    0% {
      transform: translateX(-300px);
    }
    100% {
      transform: translateY(0);
    }
  }
  div.ml {
    margin-left: 0;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    width: 20px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sidebar__wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 2;
    transition: margin 0.5s;
    margin: 0 0 0 -250px;
  }
  .sidebar__inside {
    background: white;
    height: 100%;
    width: 250px;
    padding: 30px;
    overflow: auto;
  }
  .sidebar__search {
    padding: 5px 10px;
    color: #212529;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 10px;
  }
  .sidebar__search:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  .accordion-data {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
</style>
