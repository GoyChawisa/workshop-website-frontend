<template>
  <div
    :class="[
      'icon-custom', {
      'is-clickable': isClickable,
      'is-block': isBlock,
      'is-tooltip': tooltip,
      }, className,
    ]"
    :style="[
      inlineStyles,
      {
        top: top + 'px',
        width: (isSize ? size : width) + 'px',
        height: (isSize ? size : height) + 'px',
        backgroundImage: `url(${icon})`
      }
    ]"
    :data-tooltip="tooltip"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Icon',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isSize: {
        type: Boolean,
        default: true,
      },
      isBlock: {
        type: Boolean,
      },
      isClickable: {
        type: Boolean,
      },
      icon: {
        type: String,
      },
      size: {
        type: Number,
      },
      top: {
        type: Number,
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      tooltip: {
        type: String,
      },
      onClick: {
        type: Function,
        default: function() {},
      },
    },

    mounted() {},

    data() {
      return {};
    },

    methods: {
      function_name () {},
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .icon-custom {
    /* Parent style   ------------------------------ */
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-clickable {
      cursor: pointer;
    }

    &.is-tooltip {
      @include tooltip;
    }
  }
</style>
