<template>
  <div
    :class="[
      'checkbox-custom', {
      'is-disabled': isDisabled,
      'is-disabled-darker': isDisabledDarker,
      'is-disabled-opacity': isDisabledOpacity,
      'is-disabled-active': isDisabledActive,
      'is-switch': isSwitch,
      'is-switch-small': isSwitchSmall,
      'is-use-for-report': isUseForReport,
      'is-tooltip': isTooltip,
      'is-tooltip is-tooltip-position-left': isTooltipPositionLeft,
      'is-tooltip is-tooltip-position-right': isTooltipPositionRight,
      'is-tooltip is-tooltip-position-bottom': isTooltipPositionBottom,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
    :data-tooltip="tooltip"
  >
    <input
      :value="value"
      class="checkbox-custom-input"
      type="checkbox"
      :name="name"
      v-model="proxyChecked"
    >
    <div class="checkbox-custom-icon-box">
      <div class="checkbox-custom-icon-checked"></div>
    </div>
    <span
      v-if="label"
      class="checkbox-custom-label"
    >
      {{ label }}
    </span>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    model: {
      prop: 'checked',
      event: 'input'
    },

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
      isDisabled: {
        type: Boolean,
      },
      isDisabledDarker: {
        type: Boolean,
      },
      isDisabledOpacity: {
        type: Boolean,
      },
      isDisabledActive: {
        type: Boolean,
      },
      isSwitch: {
        type: Boolean,
      },
      isSwitchSmall: {
        type: Boolean,
      },
      isUseForReport: {
        type: Boolean,
      },
      isTooltip: {
        type: Boolean,
      },
      isTooltipPositionLeft: {
        type: Boolean,
      },
      isTooltipPositionRight: {
        type: Boolean,
      },
      isTooltipPositionBottom: {
        type: Boolean,
      },
      label: {
        type: String,
      },
      tooltip: {
        type: String,
      },
      name: {
        type: String,
      },
      value: {
        type: [Number, String, Boolean],
      },
      checked: {
        type: [Array, String, Boolean],
      },
      onChange: {
        type: Function,
      },
    },
    computed: {
      proxyChecked: {
        get() {
          return this.checked;
        },
        set(val) {
          this.$emit('input', val);
          if(this.onChange) {
            this.onChange(val);
          }
        }
      }
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .checkbox-custom {
    /* Parent style   ------------------------------ */
    transition: $global-transition;
    position: relative;
    display: inline-flex;
    align-items: center;

    /* Children style ------------------------------ */
    .checkbox-custom-input {
      cursor: pointer;
      opacity: 0;
      position: absolute;
      z-index: $z-index-9;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &:checked {
        + .checkbox-custom-icon-box {
          background-color: $color-primary-1;
          border: 1px solid $color-primary-1;

          .checkbox-custom-icon-checked {
            background-image: url('~static/images/icons/ic-tick-checkbox-white.svg');
          }

          + .checkbox-custom-label {
            color: $color-primary-1;
          }
        }
      }
    }

    .checkbox-custom-icon-box {
      transition: $global-transition;
      position: relative;
      width: $checkbox-size;
      height: $checkbox-size;
      background-color: $color-white;
      border: 1px solid $color-gray-7;
      border-radius: 4px;
    }

    .checkbox-custom-icon-checked {
      transition: $global-transition;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: $z-index-1;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 8px;
      background-repeat: no-repeat;
    }

    .checkbox-custom-label {
      @include typography-primary-regular-14;
      transition: $global-transition;
      position: relative;
      top: -1px;
      padding-left: 8px;
      color: $color-gray-1;
    }

    /* Modifier style ------------------------------ */
    &.is-disabled {
      .checkbox-custom-input {
        pointer-events: none;
      }

      .checkbox-custom-icon-box {
        background-color: $color-disabled;
        border: 1px solid $color-disabled;
      }

      .checkbox-custom-label {
        color: $color-disabled;
      }

      &.is-switch,
      &.is-switch-small {
        .checkbox-custom-input {
          &:checked {
            + .checkbox-custom-icon-box {
              background-color: $color-disabled;
            }
          }
        }

        .checkbox-custom-icon-box {
          background-color: $color-disabled;
        }
      }
    }

    &.is-disabled-darker {
      .checkbox-custom-input {
        pointer-events: none;
      }

      .checkbox-custom-icon-box {
        background-color: $color-disabled-darker;
        border: 1px solid $color-disabled-darker;
      }

      .checkbox-custom-label {
        color: $color-disabled-darker;
      }

      &.is-switch,
      &.is-switch-small {
        .checkbox-custom-input {
          &:checked {
            + .checkbox-custom-icon-box {
              background-color: $color-disabled-darker;
            }
          }
        }

        .checkbox-custom-icon-box {
          background-color: $color-disabled-darker;
        }
      }

      &.is-disabled-active {
        &.is-switch,
        &.is-switch-small {
          .checkbox-custom-input {
            &:checked {
              + .checkbox-custom-icon-box {
                background-color: $color-green-1;
              }
            }
          }
        }
      }
    }

    &.is-disabled-opacity {
      .checkbox-custom-icon-box {
        opacity: 0.35;
      }
    }

    &.is-switch,
    &.is-switch-small {
      .checkbox-custom-input {
        &:checked {
          + .checkbox-custom-icon-box {
            background-color: $color-green-1;
            border: none;
          }
        }
      }

      .checkbox-custom-icon-box {
        background-color: $color-gray-9;
        border: none;
      }

      .checkbox-custom-icon-checked {
        transform: translateY(-50%);
        position: absolute;
        z-index: $z-index-1;
        top: 50%;
        left: 1px;
        background-color: $color-white;
      }
    }

    &.is-switch {
      .checkbox-custom-input {
        &:checked {
          + .checkbox-custom-icon-box {
            .checkbox-custom-icon-checked {
              left: calc(100% - 17px);
            }
          }
        }
      }

      .checkbox-custom-icon-box {
        width: 36px;
        height: 18px;
        border-radius: 9px;
      }

      .checkbox-custom-icon-checked {
        width: 16px;
        height: 16px;
        border-radius: 8px;
      }
    }

    &.is-switch-small {
      .checkbox-custom-input {
        &:checked {
          + .checkbox-custom-icon-box {
            .checkbox-custom-icon-checked {
              left: calc(100% - 13px);
            }
          }
        }
      }

      .checkbox-custom-icon-box {
        width: 28px;
        height: 14px;
        border-radius: 7px;
      }

      .checkbox-custom-icon-checked {
        width: 12px;
        height: 12px;
        border-radius: 6px;
      }
    }

    &.is-use-for-report {
      pointer-events: none;

      .checkbox-custom-input {
        &:checked {
          + .checkbox-custom-icon-box {
            background-color: $color-white;
            border: 1px solid $color-black;

            .checkbox-custom-icon-checked {
              background-image: url('~static/images/icons/ic-tick-checkbox-black.svg');
            }

            + .checkbox-custom-label {
              color: $color-black;
            }
          }
        }
      }

      .checkbox-custom-icon-box {
        border: 1px solid $color-black;
      }

      .checkbox-custom-label {
        @include typography-primary-regular-16;
        padding-left: 16px;
        color: $color-black;
      }
    }

    &.is-tooltip {
      @include tooltip;

      &:before {
        white-space: pre;
        text-align: center;
      }
    }
  }
</style>
