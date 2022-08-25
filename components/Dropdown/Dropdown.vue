<template>
  <div
    :class="[
      'dropdown-custom', {
      'is-balloon': isBalloon,
      'is-position-top': isPositionTop,
      'is-show-actions': isShowActions,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="dropdown-custom-button"
      @click="toggleShowActions"
    >
      <slot />
    </div>
    <div class="dropdown-custom-container"
      :style="[{
        width: width + 'px',
      }]"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isBalloon: {
        type: Boolean,
      },
      isPositionTop: {
        type: Boolean,
      },
      width: {
        type: Number,
      },
    },

    mounted() {},

    data() {
      return {
        isShowActions: false,
      };
    },

    methods: {
      toggleShowActions() {
        this.isShowActions = !this.isShowActions;
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .dropdown-custom {
    /* Parent style   ------------------------------ */
    position: relative;
    display: inline-flex;

    /* Children style ------------------------------ */
    .dropdown-custom-button {
      display: inline-flex;
    }

    .dropdown-custom-container {
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
      transition: $global-transition;
      transform: translateX(-50%);
      position: absolute;
      z-index: $z-index-1;
      left: 50%;
      padding: 16px;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-show-actions {
      .dropdown-custom-container {
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
      }
    }

    &.is-balloon {
      .dropdown-custom-container {
        background-color: $color-white;
        border-radius: 5px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      }
    }

    &.is-position-top {
      .dropdown-custom-container {
        bottom: calc(100% + 8px);
      }
    }
  }
</style>
