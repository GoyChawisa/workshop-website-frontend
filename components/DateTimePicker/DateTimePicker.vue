<template>
  <div
    :class="[
      'datetime-picker',
      {
        'is-medium': isMedium,
        'is-error': isError,
        'is-disabled': isDisabled,
      },
      className,
    ]"
    :style="[{ width: width + 'px' }, inlineStyles]"
  >
    <div v-if="label" class="datetime-picker-section is-label">
      <span class="datetime-picker-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="datetime-picker-text is-mandatory">*</span>
    </div>
    <div class="datetime-picker-section is-input">
      <flat-pickr
        :config="{
          inline: false,
          enableTime: isEnableTime,
          time_24hr: time24hr,
          minuteIncrement: 1,
          dateFormat: dateTimeFormat,
          minDate: minDate,
          maxDate: maxDate,
          defaultHour: defaultHour,
          defaultMinute: defaultMinute,
          onClose: updateValueOnClose,
        }"
        :value="value"
        :placeholder="placeholder"
        @input="updateValue($event)"
      />
    </div>
    <div v-if="message" class="datetime-picker-section is-message">
      <span class="datetime-picker-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'DateTimePicker',

  components: {
    flatPickr,
  },

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {},
    },
    isMedium: {
      type: Boolean,
    },
    isMandatory: {
      type: Boolean,
    },
    isError: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isEnableTime: {
      type: Boolean,
      default: true,
    },
    time24hr: {
      type: Boolean,
      default: true,
    },
    dateTimeFormat: {
      type: String,
      default: 'd/m/Y, H:i',
    },
    placeholder: {
      type: String,
      default: 'Select Date, Time',
    },
    width: {
      type: Number,
    },
    label: {
      type: String,
    },
    message: {
      type: String,
    },
    minDate: {
      type: [String, Date],
      default: null,
    },
    maxDate: {
      type: [String, Date],
      default: null,
    },
    defaultHour: {
      type: Number,
      default: 0,
    },
    defaultMinute: {
      type: Number,
      default: 0,
    },
    value: {
      type: Date | String,
      default: null,
    },
    isUpdateOnClose: {
      type: Boolean,
    },
    onClose: {
      type: Function,
      default: function () {},
    },
  },

  mounted() {},

  data() {
    return {};
  },

  methods: {
    updateValue(value) {
      if (!this.isUpdateOnClose) {
        this.$emit('input', value);
      }
    },
    updateValueOnClose(selectedDates, dateStr, instance) {
      if (this.isUpdateOnClose) {
        this.$emit('input', dateStr);
      }
      this.onClose(selectedDates, dateStr, instance);
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.datetime-picker {
  /* Parent style   ------------------------------ */
  /* Children style ------------------------------ */
  .datetime-picker-section {
    &.is-input {
      position: relative;

      &:after {
        content: ' ';
        pointer-events: none;
        transform: translateY(-50%);
        position: absolute;
        z-index: $z-index-1;
        top: 50%;
        right: 10px;
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('~static/images/icons/ic-calendar-blue.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
      }
    }

    &.is-label {
      margin: 0 0 8px;
    }

    &.is-message {
      margin: 2px 0 0;
    }
  }

  .datetime-picker-text {
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

  .flatpickr-input {
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

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  /* Size */
  &.is-medium {
    .flatpickr-input {
      padding: 5px 6px 6px;
      /* height: $input-medium-height; */
    }

    .datetime-picker-section {
      &.is-input {
        &:after {
          width: 12px;
          height: 12px;
          background-size: 12px 12px;
        }
      }
    }
  }

  /* State */
  &.is-error {
    .flatpickr-input {
      border-color: $color-error;
    }

    .datetime-picker-text {
      &.is-message {
        color: $color-red-1;
      }
    }
  }

  &.is-disabled {
    .flatpickr-input {
      pointer-events: none;
      background-color: $color-disabled;
      color: $color-gray-3;
    }
  }
}

.flatpickr-calendar {
  .flatpickr-hour,
  .flatpickr-minute {
    &::-moz-selection {
      color: $color-primary-1;
      background: transparent;
    }

    &::selection {
      color: $color-primary-1;
      background: transparent;
    }
  }

  .flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month,
  .flatpickr-prev-month:hover svg,
  .flatpickr-next-month:hover svg {
    fill: $color-white;
  }
  .flatpickr-month {
    top: 3px;
    background-color: $color-blue-1;
    color: $color-black;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    .flatpickr-current-month {
      background-color: $color-blue-5;
      padding: 3.48px 0 0 0;
    }
  }
  .flatpickr-day.selected {
    background-color: $color-blue-1a15;
    color: $color-primary-1;
    border: solid 0px;
  }

  .flatpickr-day.today:hover,
  .flatpickr-day.today:focus {
    background-color: $color-blue-1a15;
    color: $color-primary-1;
  }

  .flatpickr-current-month {
    text-align: center;
    .flatpickr-monthDropdown-months {
      height: inherit;
      height: 37px;
      width: 131px;
      bottom: 4px;
    }
    input.cur-year {
      padding: 0px 0 0 2.5ch;
      height: 34px;
    }
    .numInputWrapper {
      width: 95px;
      bottom: 4px;
    }
  }

  .flatpickr-time {
    background-color: $color-blue-1a15;
    input:hover,
    .flatpickr-am-pm:hover,
    input:focus,
    .flatpickr-am-pm:focus,
    .flatpickr-am-pm:focus .numInputWrapper span:hover {
      background-color: $color-blue-1a15;
    }
    .numInputWrapper span {
      border: 0px;
    }
  }

  .hasTime,
  .numInputWrapper span:hover {
    background-color: $color-blue-1a15;
  }
}
</style>
