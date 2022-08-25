<template>
  <div
    :class="[
      'multiselect-custom',
      {
        'is-color-blue': isColorBlue,
        'is-fluid': isFluid,
        'is-block': isBlock,
        'is-hide-arrow': isHideArrow,
        'is-medium': isMedium,
        'is-error': isError,
        'is-disabled': isDisabled,
        'is-content-above': isContentAbove,
        'is-option-container-height-minimum': isOptionContainerHeightMinimum,
      },
      className,
    ]"
    :style="[
      {
        width: width + widthUnit,
      },
      inlineStyles,
    ]"
  >
    <div v-if="label" class="multiselect-custom-section is-label">
      <span class="multiselect-custom-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="multiselect-custom-text is-mandatory"
        >*</span
      >
    </div>
    <multiselect
      :tabindex="tabIndex ? tabIndex : isDisabled ? -1 : undefined"
      :value="value"
      :options="options"
      :searchable="isSearchable"
      :show-labels="isShowLabel"
      :placeholder="placeholder"
      :allow-empty="isAllowEmpty"
      track-by="name"
      label="name"
      @input="$emit('input', $event)"
    >
      <template slot="noResult">{{ noResultMessage }}</template>
    </multiselect>
    <div v-if="message" class="multiselect-custom-section is-message">
      <span class="multiselect-custom-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'Select',

  components: {
    Multiselect,
  },
  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    value: {
      type: Object,
      default: null,
    },
    options: {
      type: Array,
      default: function () {
        return [
          { name: 'Option 1', value: '1' },
          { name: 'Option 2', value: '2' },
          { name: 'Option 3', value: '3' },
        ];
      },
    },
    inlineStyles: {
      type: Object,
      default: function () {
        return {
          // Style
        };
      },
    },
    isColorBlue: {
      type: Boolean,
    },
    isSearchable: {
      type: Boolean,
      default: false,
    },
    // Label in option
    isShowLabel: {
      type: Boolean,
      default: false,
    },
    isFluid: {
      type: Boolean,
    },
    isBlock: {
      type: Boolean,
    },
    isHideArrow: {
      type: Boolean,
    },
    isMedium: {
      type: Boolean,
    },
    isError: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isContentAbove: {
      type: Boolean,
    },
    isOptionContainerHeightMinimum: {
      type: Boolean,
    },
    isMandatory: {
      type: Boolean,
    },
    width: {
      type: Number,
    },
    widthUnit: {
      type: String,
      default: 'px',
    },
    placeholder: {
      type: String,
      default: 'Please select option',
    },
    label: {
      type: String,
    },
    message: {
      type: String,
    },
    noResultMessage: {
      type: String,
      default: 'No search result.',
    },
    tabIndex: {
      type: Number,
    },
    isAllowEmpty: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import '~assets/styleguides/styleguides';

/* Component variables */
$select-arrow-container-width: 24px;

.multiselect-custom {
  /* Parent style   ------------------------------ */
  display: inline-block;

  /* Children style ------------------------------ */
  .multiselect {
    min-height: $select-height;

    &.multiselect--above {
      .multiselect__content-wrapper {
        top: auto;
        bottom: calc(100% - 1px);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-top: 1px solid $color-gray-3a15;
      }
    }
  }

  .multiselect__select {
    transition: none;
    width: $select-arrow-container-width;
    height: calc(#{$select-height} - 2px);
    padding: 0;

    &:before {
      transform: translate(-50%, -50%);
      position: relative;
      top: 50%;
      right: auto;
      left: 50%;
      display: block;
      width: 8px;
      height: 5px;
      margin-top: 0;
      background-image: url('~static/images/icons/ic-arrow-select-blue.svg');
      background-repeat: no-repeat;
      border-width: 0;
    }
  }

  .multiselect__tags {
    min-height: $select-height;
    padding: 0 $select-arrow-container-width 0 10px;
    background: $color-white;
    border: 1px solid $color-gray-3a15;
    border-radius: 5px;
  }

  .multiselect__placeholder {
    @include typography-primary-regular-14;
    padding-top: 7px;
    margin-bottom: 0;
    color: $color-placeholder;
  }

  .multiselect__input,
  .multiselect__single {
    @include typography-primary-regular-14;
    min-height: calc(#{$select-height} - 2px);
    padding: 0;
    margin-bottom: 0;
    background: $color-white;
    border: none;
    border-radius: 5px;
    color: $color-gray-1;
  }

  .multiselect__input {
    @include placeholderTheme;
    min-height: calc(#{$select-height} - 5px);
  }

  .multiselect__single {
    @include ellipsis;
    padding-top: 7px;
  }

  .multiselect__content-wrapper {
    top: calc(100% - 1px);
    background: $color-white;
    border: 1px solid $color-gray-3a15;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .multiselect__element {
    /* border-bottom: 1px solid $color-gray-3a15; */

    &:last-child {
      border-bottom: none;
    }
  }

  .multiselect__option {
    @include typography-primary-regular-14;
    min-height: 1px;
    padding: 10px;
    color: $color-gray-3;
    white-space: normal;

    &.multiselect__option--selected {
      background-color: $color-blue-1a10;
      color: $color-gray-3;
    }
  }

  .multiselect__option--highlight {
    background: $color-blue-1a10;
    color: $color-gray-3;
  }

  .multiselect-custom-section {
    &.is-label {
      margin: 0 0 8px;
    }

    &.is-message {
      margin: 2px 0 0;
    }
  }

  .multiselect-custom-text {
    &.is-label {
      @include typography-primary-bold-12;
      color: $color-gray-1;
    }

    &.is-mandatory {
      @include typography-primary-bold-12;
      color: $color-red-1;
    }

    &.is-message {
      @include typography-primary-regular-12;
      color: $color-gray-3;
    }
  }

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-fluid {
    width: 100%;
  }

  &.is-block {
    display: block;
  }

  &.is-hide-arrow,
  &.is-hide-arrow.is-medium {
    .multiselect__select {
      display: none;
    }

    .multiselect__tags {
      padding: 0 10px;
    }
  }

  /* Color */
  &.is-color-blue {
    .multiselect__tags,
    .multiselect__content-wrapper {
      background: $color-blue-1;
    }
    .multiselect__placeholder,
    .multiselect__option {
      color: $color-white;
    }
    .multiselect__select {
      &:before {
        background-image: url('~static/images/icons/ic-arrow-select-white.svg');
      }
    }
  }

  /* Size */
  &.is-medium {
    .multiselect {
      min-height: $select-medium-height;
    }

    .multiselect__select {
      transition: none;
      height: calc(#{$select-medium-height} - 2px);
    }

    .multiselect__placeholder,
    .multiselect__single {
      padding-top: 5px;
    }

    .multiselect__tags {
      min-height: $select-medium-height;
      padding: 0 $select-arrow-container-width 0 10px;
    }

    .multiselect__input,
    .multiselect__single {
      min-height: calc(#{$select-medium-height} - 2px);
    }

    .multiselect__input {
      min-height: calc(#{$select-medium-height} - 3px);
    }

    .multiselect__option {
      padding: 6px 10px;
    }
  }

  /* State */
  &.is-error {
    .multiselect {
      &.multiselect--above {
        .multiselect__content-wrapper {
          border-top: 1px solid $color-red-1;
        }
      }
    }

    .multiselect__tags {
      border-color: $color-error;
    }

    .multiselect-custom-text {
      &.is-message {
        color: $color-red-1;
      }
    }

    .multiselect__content-wrapper {
      border: 1px solid $color-red-1;
    }
  }

  &.is-disabled {
    .multiselect {
      pointer-events: none;
    }

    .multiselect__tags,
    .multiselect__input,
    .multiselect__single {
      background: $color-disabled;
    }

    .multiselect__select {
      &:before {
        background-image: url('~static/images/icons/ic-arrow-select-gray.svg');
      }
    }
  }

  &.is-content-above {
    .multiselect {
      overflow: hidden;

      &.multiselect--active {
        overflow: visible;

        .multiselect__tags {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

        .multiselect__content-wrapper {
          top: auto;
          bottom: calc(100% - 1px);
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-top: 1px solid $color-gray-3a15;
        }
      }
    }
  }

  &.is-option-container-height-minimum {
    .multiselect__content-wrapper {
      max-height: 200px !important;
    }
  }
}
</style>
