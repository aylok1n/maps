<script lang="ts">
  import isDarkTheme, { toggle } from "../stores/theme";
</script>

<div class="switch-wrapper">
  <input
    class="switch-input"
    id="theme-switch"
    type="checkbox"
    checked={$isDarkTheme}
    on:change={toggle}
  />
  <label class="switch-control" for="theme-switch" />
</div>

<style lang="scss">
  $sun-color: #fbde0d;
  $sun-bg-color: #93e6ef;
  $moon-color: #fafbb2;
  $moon-bg-color: #3e5a98;
  $transition-options: 0.25s ease-in-out;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .switch-wrapper {
    padding-left: 20px;
    position: relative;
    z-index: 2;
  }

  .switch-input {
    display: none;
  }

  .switch-control {
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 60px;
    height: 30px;
    background: $sun-bg-color;
    border-radius: 3em;
    transition: background $transition-options;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: $sun-color;
      border-radius: inherit;
      box-shadow: 0 0 7px 1px $sun-color;
      transition: background $transition-options, box-shadow $transition-options,
        left $transition-options;
    }
  }

  .switch-input:checked {
    + .switch-control {
      background: $moon-bg-color;
      &::before {
        left: 30px;
        background: $moon-color;
        box-shadow: 0 0 4px 1px $moon-color;
      }
    }
  }
</style>
