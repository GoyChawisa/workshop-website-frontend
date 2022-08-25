<template>
  <div
    :class="[
      'grid-col', {
      'is-col-1': isCol1,
      'is-col-2': isCol2,
      'is-col-3': isCol3,
      'is-col-4': isCol4,
      'is-col-5': isCol5,
      'is-col-6': isCol6,
      'is-col-7': isCol7,
      'is-col-8': isCol8,
      'is-col-9': isCol9,
      'is-col-10': isCol10,
      'is-col-11': isCol11,
      'is-col-12': isCol12,
      'is-grow': isGrow,
      'is-narrow': isNarrow,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: "GridCol",

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {
          return {
            // Style
          };
        },
      },
      isCol1: {
        type: Boolean,
      },
      isCol2: {
        type: Boolean,
      },
      isCol3: {
        type: Boolean,
      },
      isCol4: {
        type: Boolean,
      },
      isCol5: {
        type: Boolean,
      },
      isCol6: {
        type: Boolean,
      },
      isCol7: {
        type: Boolean,
      },
      isCol8: {
        type: Boolean,
      },
      isCol9: {
        type: Boolean,
      },
      isCol10: {
        type: Boolean,
      },
      isCol11: {
        type: Boolean,
      },
      isCol12: {
        type: Boolean,
      },
      isGrow: {
        type: Boolean,
      },
      isNarrow: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .grid-col {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    &.is-col-1 {
      width: calc((100% * 1)/12);
    }

    &.is-col-2 {
      width: calc((100% * 2)/12);
    }

    &.is-col-3 {
      width: calc((100% * 3)/12);
    }

    &.is-col-4 {
      width: calc((100% * 4)/12);
    }

    &.is-col-5 {
      width: calc((100% * 5)/12);
    }

    &.is-col-6 {
      width: calc((100% * 6)/12);
    }

    &.is-col-7 {
      width: calc((100% * 7)/12);
    }

    &.is-col-8 {
      width: calc((100% * 8)/12);
    }

    &.is-col-9 {
      width: calc((100% * 9)/12);
    }

    &.is-col-10 {
      width: calc((100% * 10)/12);
    }

    &.is-col-11 {
      width: calc((100% * 11)/12);
    }

    &.is-col-12 {
      width: calc((100% * 12)/12);
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-grow {
      flex: 1;
    }

    &.is-narrow {
      flex: none;
    }
  }
</style>
