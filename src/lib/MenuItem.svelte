<script>
  export let text = "No text";
  export let value;
  export let onclick = () => {};

  $: val = value;
</script>

<div class={`accordion-item ${val && "pressed"}`} on:click={() => onclick()}>
  <p>{text}</p>
</div>

<style>
  .accordion-item {
    margin: 5px 0;
    margin-left: 26px;
    padding-left: 6px;
    word-wrap: break-word;
    cursor: pointer;
  }
  .pressed {
    margin-left: 23px;
    border-left: 3px solid red;
  }
  p {
    margin: 0;
    padding: 0;
  }
</style>
