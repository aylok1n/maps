<script lang="ts">
  import MenuItem from "./MenuItem.svelte";
  import { Accordion, AccordionItem } from "svelte-simple-accordion";

  interface Data {
    text: string;
    onclick: (val?: boolean) => void;
    value: boolean;
  }

  export let title: string = "Нет данных";
  export let data: Data[] = [];

  const getItemIndex = (item, attributeName) => {
    return item.getAttribute(attributeName);
  };

  const handleItemClicked = (event) => {
    const accordion = event.detail.accordion;
    const attributeName = event.detail.itemIndexAttributeName;
    const itemTitle = event.detail.itemTitle;
    const opened = event.detail.opened;
    accordion.querySelectorAll("[" + attributeName + "]").forEach((element) => {
      const title = element.querySelector(".item-title");
      const icon = title.querySelector(".status");
      const clicked =
        getItemIndex(itemTitle, attributeName) ===
        getItemIndex(element, attributeName);
      const toOpen = clicked && opened;
      if (toOpen) {
        title.classList.remove("hide");
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      } else {
        title.classList.add("hide");
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    });
  };
  let checked: boolean = true;
  $: checked = data.some((i) => i.value);

  const handleChecked = () => {
    data.forEach((i) => {
      if (i.value !== !checked) i.onclick(!checked);
    });
  };
</script>

<div class="wrapper">
  <span class="checkbox-outside">
    <input
      class="checkbox"
      type="checkbox"
      {checked}
      on:change={handleChecked}
    />
  </span>
  <Accordion dispatchName="itemClicked" on:itemClicked={handleItemClicked}>
    <div class="item">
      <div>
        <AccordionItem>
          <div slot="title" class="flex-row-left hide">
            <div class="item-title">
              <p class="item-title-label">
                {title}
              </p>
              <i class="status fas fa-chevron-down" />
            </div>
          </div>
          <div slot="content" class="item-content">
            {#each data as item}
              <MenuItem
                text={item.text}
                value={item.value}
                onclick={item.onclick}
              />
            {/each}
          </div>
        </AccordionItem>
      </div>
    </div>
  </Accordion>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .checkbox {
    cursor: pointer;
  }
  .checkbox:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
  }
  .checkbox:checked:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 1px;
    background-color: red;
  }
  .checkbox-outside {
    position: relative;
  }
  .status {
    display: flex;
    align-items: center;
    color: red;
  }
  .item-title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  p {
    margin: 0;
    padding: 0;
  }
</style>
