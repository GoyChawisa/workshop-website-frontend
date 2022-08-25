<template>
  <div
    :class="[
      'grid', {
      'is-gutter-5': isGutter5,
      'is-gutter-6': isGutter6,
      'is-gutter-8': isGutter8,
      'is-gutter-10': isGutter10,
      'is-gutter-12': isGutter12,
      'is-gutter-15': isGutter15,
      'is-gutter-16': isGutter16,
      'is-gutter-15-fixcolumnwidth': isGutter15FixColumnWidth,
      'is-gutter-20': isGutter20,
      'is-gutter-24': isGutter24,
      'is-gutter-25': isGutter25,
      'is-gutter-30': isGutter30,
      'is-gutter-32': isGutter32,
      'is-gutter-35': isGutter35,
      'is-gutter-40': isGutter40,
      'is-gutter-45': isGutter45,
      'is-gutter-50': isGutter50,
      'is-gutter-55': isGutter55,
      'is-gutter-60': isGutter60,
      'is-gutter-vertical-5': isGutterVertical5,
      'is-gutter-vertical-6': isGutterVertical6,
      'is-gutter-vertical-8': isGutterVertical8,
      'is-gutter-vertical-10': isGutterVertical10,
      'is-gutter-vertical-12': isGutterVertical12,
      'is-gutter-vertical-15': isGutterVertical15,
      'is-gutter-vertical-16': isGutterVertical16,
      'is-gutter-vertical-20': isGutterVertical20,
      'is-gutter-vertical-24': isGutterVertical24,
      'is-gutter-vertical-25': isGutterVertical25,
      'is-gutter-vertical-30': isGutterVertical30,
      'is-gutter-vertical-32': isGutterVertical32,
      'is-gutter-vertical-35': isGutterVertical35,
      'is-gutter-vertical-40': isGutterVertical40,
      'is-gutter-vertical-45': isGutterVertical45,
      'is-gutter-vertical-50': isGutterVertical50,
      'is-gutter-vertical-55': isGutterVertical55,
      'is-gutter-vertical-60': isGutterVertical60,
      'is-direction-column': isDirectionColumn,
      'is-center': isCenter,
      'is-right': isRight,
      'is-space-between': isSpacebetween,
      'is-vertical-center': isVerticalCenter,
      'is-vertical-bottom': isVerticalBottom,
      'is-fluid': isFluid,
      'is-nowrap': isNoWrap,
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
    name: "Grid",

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
      isGutter5: {
        type: Boolean,
      },
      isGutter6: {
        type: Boolean,
      },
      isGutter8: {
        type: Boolean,
      },
      isGutter10: {
        type: Boolean,
      },
      isGutter12: {
        type: Boolean,
      },
      isGutter15: {
        type: Boolean,
      },
      isGutter16: {
        type: Boolean,
      },
      isGutter15FixColumnWidth: {
        type: Boolean,
      },
      isGutter20: {
        type: Boolean,
      },
      isGutter24: {
        type: Boolean,
      },
      isGutter25: {
        type: Boolean,
      },
      isGutter30: {
        type: Boolean,
      },
      isGutter32: {
        type: Boolean,
      },
      isGutter35: {
        type: Boolean,
      },
      isGutter40: {
        type: Boolean,
      },
      isGutter45: {
        type: Boolean,
      },
      isGutter50: {
        type: Boolean,
      },
      isGutter55: {
        type: Boolean,
      },
      isGutter60: {
        type: Boolean,
      },
      isGutterVertical5: {
        type: Boolean,
      },
      isGutterVertical6: {
        type: Boolean,
      },
      isGutterVertical8: {
        type: Boolean,
      },
      isGutterVertical10: {
        type: Boolean,
      },
      isGutterVertical12: {
        type: Boolean,
      },
      isGutterVertical15: {
        type: Boolean,
      },
      isGutterVertical16: {
        type: Boolean,
      },
      isGutterVertical20: {
        type: Boolean,
      },
      isGutterVertical24: {
        type: Boolean,
      },
      isGutterVertical25: {
        type: Boolean,
      },
      isGutterVertical30: {
        type: Boolean,
      },
      isGutterVertical32: {
        type: Boolean,
      },
      isGutterVertical35: {
        type: Boolean,
      },
      isGutterVertical40: {
        type: Boolean,
      },
      isGutterVertical45: {
        type: Boolean,
      },
      isGutterVertical50: {
        type: Boolean,
      },
      isGutterVertical55: {
        type: Boolean,
      },
      isGutterVertical60: {
        type: Boolean,
      },
      isDirectionColumn: {
        type: Boolean,
      },
      isCenter: {
        type: Boolean,
      },
      isRight: {
        type: Boolean,
      },
      isSpacebetween: {
        type: Boolean,
      },
      isVerticalCenter: {
        type: Boolean,
      },
      isVerticalBottom: {
        type: Boolean,
      },
      isFluid: {
        type: Boolean,
      },
      isNoWrap: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .grid {
    /* Parent style   ------------------------------ */
    display: flex;
    flex-wrap: wrap;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    /* Gutter */
    &.is-gutter-5 {
      margin-left: -5px;

      > .grid-col {
        padding-left: 5px;
      }
    }

    &.is-gutter-6 {
      margin-left: -6px;

      > .grid-col {
        padding-left: 6px;
      }
    }

    &.is-gutter-8 {
      margin-left: -8px;

      > .grid-col {
        padding-left: 8px;
      }
    }

    &.is-gutter-10 {
      margin-left: -10px;

      > .grid-col {
        padding-left: 10px;
      }
    }

    &.is-gutter-12 {
      margin-left: -12px;

      > .grid-col {
        padding-left: 12px;
      }
    }

    &.is-gutter-15 {
      margin-left: -15px;

      > .grid-col {
        padding-left: 15px;
      }
    }

    &.is-gutter-16 {
      margin-left: -16px;

      > .grid-col {
        padding-left: 16px;
      }
    }

    /* Fix width % in flex display container eg. in swiper carousel */
    &.is-gutter-15-fixcolumnwidth {
      margin-left: -15px;

      > .grid-col {
        padding-left: 15px;

        &.is-column-1 { width: calc(((100% * 1)/12) - 15px); }
        &.is-column-2 { width: calc(((100% * 2)/12) - 15px); }
        &.is-column-3 { width: calc(((100% * 3)/12) - 15px); }
        &.is-column-4 { width: calc(((100% * 4)/12) - 15px); }
        &.is-column-5 { width: calc(((100% * 5)/12) - 15px); }
        &.is-column-6 { width: calc(((100% * 6)/12) - 15px); }
        &.is-column-7 { width: calc(((100% * 7)/12) - 15px); }
        &.is-column-8 { width: calc(((100% * 8)/12) - 15px); }
        &.is-column-9 { width: calc(((100% * 9)/12) - 15px); }
        &.is-column-10 { width: calc(((100% * 10)/12) - 15px); }
        &.is-column-11 { width: calc(((100% * 11)/12) - 15px); }
        &.is-column-12 { width: calc(((100% * 12)/12) - 15px); }
      }
    }

    &.is-gutter-20 {
      margin-left: -20px;

      > .grid-col {
        padding-left: 20px;
      }
    }

    &.is-gutter-24 {
      margin-left: -24px;

      > .grid-col {
        padding-left: 24px;
      }
    }

    &.is-gutter-25 {
      margin-left: -25px;

      > .grid-col {
        padding-left: 25px;
      }
    }

    &.is-gutter-30 {
      margin-left: -30px;

      > .grid-col {
        padding-left: 30px;
      }
    }

    &.is-gutter-32 {
      margin-left: -32px;

      > .grid-col {
        padding-left: 32px;
      }
    }

    &.is-gutter-35 {
      margin-left: -35px;

      > .grid-col {
        padding-left: 35px;
      }
    }

    &.is-gutter-40 {
      margin-left: -40px;

      > .grid-col {
        padding-left: 40px;
      }
    }

    &.is-gutter-45 {
      margin-left: -45px;

      > .grid-col {
        padding-left: 45px;
      }
    }

    &.is-gutter-50 {
      margin-left: -50px;

      > .grid-col {
        padding-left: 50px;
      }
    }

    &.is-gutter-55 {
      margin-left: -55px;

      > .grid-col {
        padding-left: 55px;
      }
    }

    &.is-gutter-60 {
      margin-left: -60px;

      > .grid-col {
        padding-left: 60px;
      }
    }

    &.is-gutter-100 {
      margin-left: -100px;

      > .grid-col {
        padding-left: 100px;
      }
    }

    /* Gutter vertical */
    &.is-gutter-vertical-5 {
      margin-bottom: -5px;

      > .grid-col {
        padding-bottom: 5px;
      }
    }

    &.is-gutter-vertical-6 {
      margin-bottom: -6px;

      > .grid-col {
        padding-bottom: 6px;
      }
    }

    &.is-gutter-vertical-8 {
      margin-bottom: -8px;

      > .grid-col {
        padding-bottom: 8px;
      }
    }

    &.is-gutter-vertical-10 {
      margin-bottom: -10px;

      > .grid-col {
        padding-bottom: 10px;
      }
    }

    &.is-gutter-vertical-12 {
      margin-bottom: -12px;

      > .grid-col {
        padding-bottom: 12px;
      }
    }

    &.is-gutter-vertical-15 {
      margin-bottom: -15px;

      > .grid-col {
        padding-bottom: 15px;
      }
    }

    &.is-gutter-vertical-16 {
      margin-bottom: -16px;

      > .grid-col {
        padding-bottom: 16px;
      }
    }

    &.is-gutter-vertical-20 {
      margin-bottom: -20px;

      > .grid-col {
        padding-bottom: 20px;
      }
    }

    &.is-gutter-vertical-24 {
      margin-bottom: -24px;

      > .grid-col {
        padding-bottom: 24px;
      }
    }

    &.is-gutter-vertical-25 {
      margin-bottom: -25px;

      > .grid-col {
        padding-bottom: 25px;
      }
    }

    &.is-gutter-vertical-30 {
      margin-bottom: -30px;

      > .grid-col {
        padding-bottom: 30px;
      }
    }

    &.is-gutter-vertical-32 {
      margin-bottom: -32px;

      > .grid-col {
        padding-bottom: 32px;
      }
    }

    &.is-gutter-vertical-35 {
      margin-bottom: -35px;

      > .grid-col {
        padding-bottom: 35px;
      }
    }

    &.is-gutter-vertical-40 {
      margin-bottom: -40px;

      > .grid-col {
        padding-bottom: 40px;
      }
    }

    &.is-gutter-vertical-45 {
      margin-bottom: -45px;

      > .grid-col {
        padding-bottom: 45px;
      }
    }

    &.is-gutter-vertical-50 {
      margin-bottom: -50px;

      > .grid-col {
        padding-bottom: 50px;
      }
    }

    &.is-gutter-vertical-55 {
      margin-bottom: -55px;

      > .grid-col {
        padding-bottom: 55px;
      }
    }

    &.is-gutter-vertical-60 {
      margin-bottom: -60px;

      > .grid-col {
        padding-bottom: 60px;
      }
    }

    /* Direction */
    &.is-direction-column {
      flex-direction: column;
    }

    /* Align */
    &.is-center {
      justify-content: center;
    }

    &.is-right {
      justify-content: flex-end;
    }

    &.is-space-between {
      justify-content: space-between;
    }

    &.is-vertical-center {
      align-items: center;
    }

    &.is-vertical-bottom {
      align-items: flex-end;
    }

    /* Width */
    &.is-fluid {
      flex: 1;
    }

    &.is-nowrap {
      flex-wrap: nowrap;
    }
  }
</style>
