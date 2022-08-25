<template>
  <tbody
    :class="[
      'tbody-custom', {
      'is-show-more-detail': isShowMoreDetail,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </tbody>
</template>

<script>
  export default {
    name: 'TBody',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isShowMoreDetail: {
        type: Boolean,
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

  .tbody-custom {
    /* Parent style   ------------------------------ */
    &:nth-child(odd) {
      .tr-custom {
        &:first-child {
          .td-custom {
            background-color: $color-white;

            &.is-information-warning {
              background-color: $color-red-8;
            }
          }
        }
      }

      &.is-show-more-detail {
        .td-custom {
          &.is-more-detail-content {
            background-color: $color-white;

            .td-custom-line-more-detail-content {
              border-top: 1px solid $color-purple-15;
            }
          }
        }
      }
    }

    &:last-child {
      .tr-custom {
        .td-custom {
          &:after {
            display: none;
          }
        }
      }
    }

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-more-detail {}

    &.is-show-more-detail {
      .td-custom {
        &.is-more-detail-control {
          height: 48px;

          &:after {
            display: none;
          }

          .td-custom-line {
            &:after {
              display: none;
            }
          }
        }

        &.is-more-detail-content {
          display: table-cell;

          .tinfo {
            top: 0;
          }
        }
      }

      .tinfo {
        top: 1px;
      }

      .toperation {
        &.is-button-group {
          position: relative;
          top: 2px;

          .tinfo {
            top: 0;
          }
        }

        &.is-more-detail {
          .toperation-image {
            &.is-ic-arrow-more-detail {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
</style>
