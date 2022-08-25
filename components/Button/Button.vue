<template>
  <button
    :class="[
      'button-custom',
      {
        'is-color-gray': isColorGray,
        'is-color-blue': isColorBlue,
        'is-color-blue-light': isColorBlueLight,
        'is-color-blue-lightest': isColorBlueLightest,
        'is-color-green': isColorGreen,
        'is-color-green-light': isColorGreenLight,
        'is-color-green-lighter': isColorGreenLighter,
        'is-color-orange': isColorOrange,
        'is-color-orange-light': isColorOrangeLight,
        'is-color-red': isColorRed,
        'is-color-red-dark': isColorRedDark,
        'is-color-red-lightest': isColorRedLightest,
        'is-text-gray': isTextGray,
        'is-text-blue': isTextBlue,
        'is-text-red': isTextRed,
        'is-small': isSmall,
        'is-medium': isMedium,
        'is-disabled': isDisabled,
        'is-fluid': isFluid,
        'is-outline': isOutline,
        'is-padding-small': isPaddingSmall,
      },
      className,
    ]"
    :style="[
      {
        width: width + 'px',
      },
      inlineStyles,
    ]"
    @click="onClick"
  >
    <span v-if="isShowIconFront" class="button-custom-icon is-front">
      <img
        class="button-custom-icon-image"
        :style="{
          top: iconFrontTop + 'px',
          left: iconFrontLeft + 'px',
          width: iconFrontWidth + 'px',
          height: iconFrontHeight + 'px',
        }"
        :src="iconFrontSrc"
        :alt="iconFrontAlt"
      />
    </span>
    <span
      class="button-custom-text"
      :style="{
        top: textTop + 'px',
      }"
    >
      <slot />
    </span>
    <span v-if="isShowIconBack" class="button-custom-icon is-back">
      <img
        class="button-custom-icon-image"
        :style="{
          top: iconBackTop + 'px',
          left: iconBackLeft + 'px',
          width: iconBackWidth + 'px',
          height: iconBackHeight + 'px',
        }"
        :src="iconBackSrc"
        :alt="iconBackAlt"
      />
    </span>
    <span v-if="selectedNumber" class="button-custom-badge">
      {{ selectedNumber }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {
        return {
          // Style
        };
      },
    },
    isColorGray: {
      type: Boolean,
    },
    isColorBlue: {
      type: Boolean,
    },
    isColorBlueLight: {
      type: Boolean,
    },
    isColorBlueLightest: {
      type: Boolean,
    },
    isColorGreen: {
      type: Boolean,
    },
    isColorGreenLight: {
      type: Boolean,
    },
    isColorGreenLighter: {
      type: Boolean,
    },
    isColorOrange: {
      type: Boolean,
    },
    isColorOrangeLight: {
      type: Boolean,
    },
    isColorRed: {
      type: Boolean,
    },
    isColorRedDark: {
      type: Boolean,
    },
    isColorRedLightest: {
      type: Boolean,
    },
    isTextGray: {
      type: Boolean,
    },
    isTextBlue: {
      type: Boolean,
    },
    isTextRed: {
      type: Boolean,
    },
    isSmall: {
      type: Boolean,
    },
    isMedium: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isFluid: {
      type: Boolean,
    },
    isOutline: {
      type: Boolean,
    },
    isPaddingSmall: {
      type: Boolean,
    },
    isShowIconFront: {
      type: Boolean,
      default: false,
    },
    isShowIconBack: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
    },
    iconFrontSrc: {
      type: String,
    },
    iconFrontTop: {
      type: Number,
    },
    iconFrontLeft: {
      type: Number,
    },
    iconFrontWidth: {
      type: Number,
    },
    iconFrontHeight: {
      type: Number,
    },
    iconFrontAlt: {
      type: String,
      default: 'Icon',
    },
    iconBackSrc: {
      type: String,
    },
    iconBackTop: {
      type: Number,
    },
    iconBackLeft: {
      type: Number,
    },
    iconBackWidth: {
      type: Number,
    },
    iconBackHeight: {
      type: Number,
    },
    iconBackAlt: {
      type: String,
      default: 'Icon',
    },
    textTop: {
      type: Number,
    },
    selectedNumber: {
      type: String,
    },
    onClick: {
      type: Function,
      default: function () {},
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.button-custom {
  /* Parent style   ------------------------------ */
  @include button-transition;
  cursor: pointer;
  transition: $global-transition;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $button-height;
  padding: 0 12px;
  background-color: $color-black;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  /* Children style ------------------------------ */
  .button-custom-icon {
    // Fix line height spacing in flex container if element is inline/inline-block display
    display: block;

    &.is-front {
      margin-right: 8px;
    }

    &.is-back {
      margin-left: 8px;
    }
  }

  .button-custom-icon-image {
    position: relative;
    // Fix line height spacing in flex container if element is inline/inline-block display
    display: block;
  }

  .button-custom-text {
    @include typography-primary-semibold-14;
    position: relative;
    top: -1px;
    color: $color-white;
  }

  .button-custom-badge {
    @include typography-primary-semibold-14;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    padding: 0 0 2px;
    margin: 0 0 0 6px;
    background-color: $color-white;
    border-radius: 16px;
    color: $color-gray-1;
  }

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  /* Color */
  &.is-color-gray {
    background: $color-gray-13;

    &:hover {
      background: $color-gray-19;
    }
  }

  &.is-color-blue {
    background: $color-blue-1;

    &:hover {
      background: $color-blue-9;
    }
  }

  &.is-color-blue-light {
    background: $color-blue-3;

    &:hover {
      background: $color-blue-10;
    }
  }

  &.is-color-blue-lightest {
    background: $color-blue-1a10;

    &:hover {
      background: $color-blue-11;
    }
  }

  &.is-color-green {
    background: $color-green-2;

    &:hover {
      background: $color-green-7;
    }
  }

  &.is-color-green-light {
    background: $color-green-3;

    &:hover {
      background: $color-green-8;
    }
  }

  &.is-color-green-lighter {
    background: $color-green-1;

    &:hover {
      background: $color-green-9;
    }
  }

  &.is-color-orange {
    background: $color-orange-1;

    &:hover {
      background: $color-orange-7;
    }

    &.is-outline {
      background: $color-orange-4;
      border: 1px solid $color-orange-6;

      &:hover {
        background: $color-orange-9;
        border: 1px solid $color-orange-8;

        .button-custom-text {
          color: $color-orange-8;
        }
      }

      .button-custom-text {
        color: $color-orange-6;
      }
    }
  }

  &.is-color-orange-light {
    background: $color-orange-2;

    &:hover {
      background: $color-orange-10;
    }
  }

  &.is-color-red {
    background: $color-red-2;

    &:hover {
      background: $color-red-12;
    }

    &.is-outline {
      background: $color-red-5;
      border: 1px solid $color-red-3;

      &:hover {
        background: $color-red-13;
        border: 1px solid $color-red-14;

        .button-custom-text {
          color: $color-red-15;
        }
      }

      .button-custom-text {
        color: $color-red-1;
      }
    }
  }

  &.is-color-red-dark {
    background: $color-red-1;

    &:hover {
      background: $color-red-15;
    }
  }

  &.is-color-red-lightest {
    background: $color-red-6;

    &:hover {
      background: $color-red-16;
    }
  }

  /* Text */
  &.is-text-gray {
    .button-custom-text {
      color: $color-gray-3;
    }
  }

  &.is-text-blue {
    .button-custom-text {
      color: $color-blue-1;
    }
  }

  &.is-text-red {
    .button-custom-text {
      color: $color-red-1;
    }
  }

  /* Size */
  &.is-small {
    height: $button-small-height;
    border-radius: 3px;

    .button-custom-text {
      @include typography-primary-semibold-12;
    }
  }

  &.is-medium {
    height: $button-medium-height;
    border-radius: 4px;

    .button-custom-text {
      @include typography-primary-semibold-12;
    }
  }

  /* Other */
  &.is-disabled {
    pointer-events: none;
    opacity: 0.35;
  }

  &.is-fluid {
    width: 100%;
  }

  &.is-padding-small {
    padding: 0 8px;
  }
}
</style>
