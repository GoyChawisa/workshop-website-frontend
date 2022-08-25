<template>
  <div
    :class="[
      'radio-custom', {
      'is-disabled': isDisabled,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <input
      :checked="isChecked"
      :value="value"
      class="radio-custom-input"
      type="radio"
      :name="name"
      v-on:input="$emit('input', $event.target.value)"
    >
    <div class="radio-custom-icon-box">
      <div class="radio-custom-icon-checked"></div>
    </div>
    <span
      v-if="label"
      class="radio-custom-label"
    >
      {{ label }}
    </span>
  </div>
</template>

<script>
  export default {
    name: "Radio",
    model: {
      prop: 'modelValue',
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
      label: {
        type: String,
      },
      name: {
        type: String,
      },
      value: {
        type: [String, Number],
      },
      modelValue: {
        default: '',
      }
    },
    computed: {
      isChecked() {
        return this.modelValue == this.value
      }
    }
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .radio-custom {
    /* Parent style   ------------------------------ */
    transition: $global-transition;
    position: relative;
    display: inline-flex;
    align-items: center;

    /* Children style ------------------------------ */
    .radio-custom-input {
      cursor: pointer;
      opacity: 0;
      position: absolute;
      z-index: $z-index-9;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &:checked {
        + .radio-custom-icon-box {
          border: 1px solid $color-primary-1;

          .radio-custom-icon-checked {
            background-color: $color-primary-1;
          }

          + .radio-custom-label {
            color: $color-primary-1;
          }
        }
      }
    }

    .radio-custom-icon-box {
      transition: $global-transition;
      position: relative;
      width: $radio-size;
      height: $radio-size;
      background-color: $color-white;
      border: 1px solid $color-gray-7;
      border-radius: calc(#{$radio-size}/2);
    }

    .radio-custom-icon-checked {
      transition: $global-transition;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: $z-index-1;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 5px;
    }

    .radio-custom-label {
      @include typography-primary-regular-14;
      transition: $global-transition;
      position: relative;
      top: -1px;
      padding-left: 8px;
      color: $color-gray-1;
    }

    /* Modifier style ------------------------------ */
    &.is-disabled {
      .radio-custom-input {
        pointer-events: none;
      }

      .radio-custom-icon-box {
        background-color: $color-disabled;
        border: 1px solid $color-disabled;
      }

      .radio-custom-label {
        color: $color-disabled;
      }
    }
  }
</style>
