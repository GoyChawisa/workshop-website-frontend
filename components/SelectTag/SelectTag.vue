<template>
  <div
    :class="[
      'multiselect-tag-custom',
      {
        'is-fluid': isFluid,
        'is-block': isBlock,
        'is-hide-arrow': isHideArrow,
        'is-medium': isMedium,
        'is-error': isError,
        'is-disabled': isDisabled,
      },
      className,
    ]"
    :style="[
      {
        width: width + widthUnit,
        minWidth: minWidth + widthUnit,
      },
      inlineStyles,
    ]"
  >
    <div v-if="label" class="multiselect-tag-custom-section is-label">
      <span class="multiselect-tag-custom-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="multiselect-tag-custom-text is-mandatory"
        >*</span
      >
    </div>
    <multiselect
      :value="value"
      :options="options"
      :searchable="isSearchable"
      :multiple="true"
      :taggable="true"
      :close-on-select="false"
      :clear-on-select="false"
      :placeholder="placeholder"
      track-by="value"
      label="name"
      @input="$emit('input', $event)"
      @tag="addTag"
    >
      <template slot="noResult">{{ noResultMessage }}</template>
    </multiselect>

    <!-- <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
    >
      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
    </multiselect> -->

    <!-- <multiselect
      :value="value"
      :options="options"
      :searchable="isSearchable"
      :show-labels="isShowLabel"
      :placeholder="placeholder"
      track-by="name"
      label="name"
      @input="$emit('input',$event)"
    >
      <template slot="noResult">{{ noResultMessage }}</template>
    </multiselect> -->
    <div v-if="message" class="multiselect-tag-custom-section is-message">
      <span class="multiselect-tag-custom-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'SelectTag',

  components: {
    Multiselect,
  },
  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    value: {
      type: Array,
      default: function () {
        return [
          { name: 'Approved', value: '1' },
          { name: 'Request document', value: '2' },
          { name: 'On Process', value: '3' },
          { name: 'Paid', value: '4' },
          { name: 'Canceled', value: '5' },
          { name: 'Rejected', value: '6' },
          { name: 'Time Out', value: '7' },
        ];
      },
    },
    options: {
      type: Array,
      default: function () {
        return [
          { name: 'Approved', value: '1' },
          { name: 'Request document', value: '2' },
          { name: 'On Process', value: '3' },
          { name: 'Paid', value: '4' },
          { name: 'Canceled', value: '5' },
          { name: 'Rejected', value: '6' },
          { name: 'Time Out', value: '7' },
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
    isMandatory: {
      type: Boolean,
    },
    width: {
      type: Number,
    },
    minWidth: {
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
  },

  data() {
    return {};
  },

  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import '~assets/styleguides/styleguides';

/* Component variables */
$select-arrow-container-width: 24px;

.multiselect-tag-custom {
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
    padding: 0 $select-arrow-container-width 0 5px;
    background: $color-white;
    border: 1px solid $color-gray-3a15;
    border-radius: 5px;
  }

  .multiselect__tags-wrap {
    display: block;
    padding: 0 0 5px;
  }

  .multiselect__tag {
    display: inline-flex;
    align-items: center;
    padding: 4px 25px 5px 8px;
    margin-top: 5px;
    margin-right: 6px;
    margin-bottom: 0;
    background: $color-blue-6;
    border-radius: 4px;

    &:last-child {
      margin-right: 0;
    }

    span {
      @include typography-primary-semibold-12;
      color: $color-gray-1;
    }

    .multiselect__tag-icon {
      @include button-transition;
      cursor: pointer;
      transform: translateY(-50%);
      top: 50%;
      right: 0;
      bottom: 0;
      width: 25px;
      height: 11px;
      margin-left: 0;
      background-image: url('~static/images/icons/ic-delete-tag-gray.svg');
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 0;
      line-height: 1;

      &:hover {
        background-color: transparent;
      }

      &:after {
        font-size: 0;
      }
    }
  }

  .multiselect__placeholder {
    @include typography-primary-light-12;
    padding-top: 9px;
    padding-left: 5px;
    margin-bottom: 0;
    color: $color-placeholder;
  }

  .multiselect__input,
  .multiselect__single {
    @include typography-primary-medium-12;
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
    min-height: calc(#{$select-height} - 3px);
  }

  .multiselect__single {
    @include ellipsis;
    padding-top: 9px;
  }

  .multiselect__content-wrapper {
    @include scrollbar-overlay;
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
    @include typography-primary-medium-12;
    min-height: 1px;
    padding: 10px;
    color: $color-gray-3;
    white-space: normal;

    &:after {
      @include typography-primary-medium-10;
      transform: translateY(-50%);
      z-index: $z-index-1;
      top: 50%;
      padding-right: 12px;
      padding-left: 12px;
      line-height: 1;
    }

    &.multiselect__option--selected {
      background-color: $color-white;
      color: $color-gray-3;
    }
  }

  .multiselect__option--highlight {
    background: $color-blue-1a10;
    color: $color-gray-3;

    &:after {
      content: 'Select';
      background: transparent;
      color: $color-green-1;
    }

    &.multiselect__option--selected {
      background-color: $color-blue-1a10;
      color: $color-gray-3;

      &:after {
        content: 'Remove';
        color: $color-red-1;
      }
    }
  }

  .multiselect-tag-custom-section {
    &.is-label {
      margin: 0 0 8px;
    }

    &.is-message {
      margin: 2px 0 0;
    }
  }

  .multiselect-tag-custom-text {
    &.is-label {
      @include typography-primary-bold-12;
      color: $color-gray-1;
    }

    &.is-mandatory {
      @include typography-primary-light-12;
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

    .multiselect-tag-custom-text {
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
  }
}
</style>
