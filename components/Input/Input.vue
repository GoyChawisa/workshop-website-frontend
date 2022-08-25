<template>
  <div
    :class="[
      'input-custom-container',
      {
        'is-medium': isMedium,
        'is-fluid': isFluid,
        'is-border-none': isBorderNone,
        'is-error': isError,
        'is-disabled': isDisabled,
        'is-exceed': isExceed,
        'is-label-small': isLabelSmall,
        'is-label-white': isLabelWhite,
        'is-label-right': isLabelRight,
        'is-cost': isCost,
        'is-cost-with-label': isCostWithLabel,
        'is-cost-benefit-element': isCostBenefitElement,
        'is-unit-day': isUnitDay,
        'is-unit-day-with-label': isUnitDayWithLabel,
        'is-unit-percent': isUnitPercent,
        'is-unit-percent-with-label': isUnitPercentWithLabel,
        'is-unit-cost': isUnitCost,
        'is-unit-cost-with-label': isUnitCostWithLabel,
        'is-character-counter': characterCounter,
        'is-prefixl-label': prefixLabel,
        'is-button-toggle-password': isButtonTogglePassword,
        'is-hide-password': isHidePassword,
      },
      className,
    ]"
    :style="[inlineStyles]"
  >
    <div v-if="label" class="input-custom-section is-label">
      <span class="input-custom-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="input-custom-text is-mandatory">*</span>
    </div>
    <div class="input-custom-section is-field">
      <div v-if="prefixLabel" class="input-custom-section is-prefixl-label">
        <span class="input-custom-text is-prefixl-label">{{ prefixLabel }}</span>
      </div>
      <input
        class="input-custom"
        :style="[
          { width: width + 'px' },
          paddingLeft >= 0 && { 'padding-left': paddingLeft + 'px' },
        ]"
        :type="type"
        :placeholder="placeholder"
        :name="name"
        :value="value"
        :readonly="readonly"
        :maxlength="maxLength"
        :tabindex="tabIndex ? tabIndex : isDisabled ? -1 : undefined"
        @input="updateValue($event)"
        @keypress="onKeypress($event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        v-mask="mask"
      />
      <div
        v-if="characterCounter"
        class="input-custom-section is-character-counter"
      >
        <span class="input-custom-text is-character-counter">
          {{ characterCounter }}/{{ maxLength }}
        </span>
      </div>
      <div
        v-if="isButtonTogglePassword"
        class="input-custom-section is-button-toggle-password"
        @click="onClickTogglePassword"
      >
        <img
          v-if="isHidePassword"
          src="/images/icons/ic-eye-close.svg"
          alt="Icon"
        />
        <img v-else src="/images/icons/ic-eye.svg" alt="Icon" />
      </div>
    </div>
    <div v-if="message" class="input-custom-section is-message">
      <span class="input-custom-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask';
export default {
  name: 'Input',
  directives: {
    mask: (el, binding) => {
      if (!binding.value) return;
      mask(el, binding);
    },
  },

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
    isMedium: {
      type: Boolean,
    },
    isFluid: {
      type: Boolean,
    },
    isBorderNone: {
      type: Boolean,
    },
    isError: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isExceed: {
      type: Boolean,
    },
    isLabelSmall: {
      type: Boolean,
    },
    isLabelWhite: {
      type: Boolean,
    },
    isLabelRight: {
      type: Boolean,
    },
    isCost: {
      type: Boolean,
    },
    isCostWithLabel: {
      type: Boolean,
    },
    isCostBenefitElement: {
      type: Boolean,
    },
    isMandatory: {
      type: Boolean,
    },
    isUnitDay: {
      type: Boolean,
    },
    isUnitDayWithLabel: {
      type: Boolean,
    },
    isUnitPercent: {
      type: Boolean,
    },
    isUnitPercentWithLabel: {
      type: Boolean,
    },
    isUnitCost: {
      type: Boolean,
    },
    isUnitCostWithLabel: {
      type: Boolean,
    },
    isNumber: {
      type: Boolean,
    },
    isButtonTogglePassword: {
      type: Boolean,
    },
    isHidePassword: {
      type: Boolean,
    },
    width: {
      type: Number,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    characterCounter: {
      type: Number,
    },
    maxLength: {
      type: Number,
      default: 255,
    },
    label: {
      type: String,
    },
    message: {
      type: String,
    },
    onChangeInput: {
      type: Function,
    },
    onClickTogglePassword: {
      type: Function,
    },
    readonly: {
      type: Boolean,
    },
    mask: {
      type: [String, Array],
    },
    validateInput: {
      type: Function,
      default: function (value) {
        return value;
      },
    },
    tabIndex: {
      type: Number,
    },
    paddingLeft: {
      type: Number,
    },
    prefixLabel: {
      type: String,
    },
  },
  methods: {
    updateValue(ev) {
      const value = this.validateInput(ev.target.value);
      this.$emit('input', value);
      ev.target.value = value;
      if (this.onChangeInput) {
        this.onChangeInput(ev.target.value);
      }
    },
    onKeypress: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (this.isNumber) {
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          evt.preventDefault();
        }
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.input-custom-container {
  /* Parent style   ------------------------------ */
  position: relative;
  display: inline-block;

  /* Children style ------------------------------ */
  .input-custom {
    @include placeholderTheme;
    @include typography-primary-regular-14;
    width: 100%;
    /* height: $input-height; */
    padding: 7px 10px 9px 10px;
    background-color: $color-white;
    border: 1px solid $color-gray-3a15;
    border-radius: 4px;
    color: $color-gray-1;
  }

  .input-custom-section {
    &.is-label {
      margin: 0 0 8px;
    }

    &.is-message {
      margin: 2px 0 0;
    }

    &.is-field {
      position: relative;
    }

    &.is-character-counter {
      position: absolute;
      z-index: $z-index-1;
      top: 8px;
      right: 10px;
    }

    &.is-button-toggle-password {
      @include button-transition;
      position: absolute;
      z-index: $z-index-1;
      top: 7px;
      right: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 24px;
      height: 24px;
    }

    &.is-prefixl-label {
      pointer-events: none;
      position: absolute;
      z-index: $z-index-1;
      top: 8px;
      left: 13px;
    }
  }

  .input-custom-text {
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

    &.is-character-counter {
      @include typography-primary-regular-12;
      color: $color-placeholder;
    }

    &.is-prefixl-label {
      @include typography-primary-regular-12;
      color: $color-gray-1;
    }
  }

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-fluid {
    width: 100%;
  }

  &.is-border-none {
    .input-custom {
      padding: 10px 10px 11px 10px;
      border: none;
    }
  }

  /* Size */
  &.is-medium {
    .input-custom {
      padding: 5px 6px 6px;
      /* height: $input-medium-height; */
    }

    .input-custom-section {
      &.is-prefixl-label {
        top: 3px;
        left: 8px;
      }
    }

    &.is-border-none {
      .input-custom {
        padding: 6px 6px 7px;
      }
    }
  }

  /* State */
  &.is-error {
    .input-custom {
      border-color: $color-error;
    }

    .input-custom-text {
      &.is-message,
      &.is-character-counter {
        color: $color-red-1;
      }
    }
  }

  &.is-disabled {
    .input-custom {
      pointer-events: none;
      background-color: $color-disabled;
      color: $color-gray-1;
    }
  }

  &.is-exceed {
    .input-custom {
      color: $color-red-1;
    }
  }

  &.is-label-small {
    .input-custom-text {
      &.is-label {
        @include typography-primary-bold-10;
      }
    }
  }

  &.is-label-white {
    .input-custom-text {
      &.is-label {
        color: $color-white;
      }
    }
  }

  &.is-label-right {
    .input-custom-section {
      &.is-label {
        text-align: right;
      }
    }
  }

  /* Specific */
  &.is-cost,
  &.is-cost-with-label,
  &.is-cost-benefit-element {
    position: relative;

    .input-custom {
      @include typography-primary-regular-12;
      padding: 6px 37px 5px 6px;
      text-align: right;
    }

    &:after {
      @include typography-primary-regular-12;
      content: 'THB';
      transform: translateY(-50%);
      position: absolute;
      z-index: $z-index-1;
      top: calc(50% - 1px);
      right: 6px;
      display: block;
      margin: 1px 0 0;
      color: $color-gray-3a50;
    }
  }

  &.is-cost-with-label {
    &:after {
      top: calc(50% + 12px);
    }
  }

  &.is-cost-benefit-element {
    .input-custom {
      border: 1px solid $color-gray-4;
    }
  }

  &.is-character-counter {
    .input-custom {
      padding: 9px 60px 10px 10px;
    }

    &.is-medium {
      .input-custom-section {
        &.is-character-counter {
          top: 4px;
        }
      }

      .input-custom {
        padding: 5px 60px 6px 6px;
        /* height: $input-medium-height; */
      }
    }
  }

  &.is-unit-day,
  &.is-unit-day-with-label,
  &.is-unit-percent,
  &.is-unit-percent-with-label,
  &.is-unit-cost,
  &.is-unit-cost-with-label {
    position: relative;

    .input-custom {
      padding: 9px 45px 10px 10px;
    }

    &:after {
      @include typography-primary-regular-12;
      transform: translateY(-50%);
      position: absolute;
      z-index: $z-index-1;
      top: calc(50% - 1px);
      right: 10px;
      display: block;
      margin: 1px 0 0;
      color: $color-blue-1a50;
    }
  }

  &.is-unit-day,
  &.is-unit-day-with-label {
    &:after {
      content: 'Day(s)';
    }
  }

  &.is-unit-percent,
  &.is-unit-percent-with-label {
    &:after {
      content: '%';
    }
  }

  &.is-unit-cost,
  &.is-unit-cost-with-label {
    &:after {
      content: 'THB';
    }
  }

  &.is-unit-day-with-label,
  &.is-unit-cost-with-label,
  &.is-unit-percent-with-label {
    &:after {
      margin: 13px 0 0;
    }
  }

  &.is-toggle-password {
  }
}
</style>
