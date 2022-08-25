<template>
  <div
    :class="[
      'textarea-custom-container', {
      'is-fluid': isFluid,
      'is-error': isError,
      'is-disabled': isDisabled,
      'is-character-counter': characterCounter,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div v-if="label" class="textarea-custom-section is-label">
      <span class="textarea-custom-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="textarea-custom-text is-mandatory">*</span>
    </div>
    <div class="textarea-custom-section is-field">
      <textarea
        class="textarea-custom"
        :style="[{
          width: width + 'px',
          height: height + 'px',
        }]"
        :placeholder="placeholder"
        :name="name"
        :value="value"
        :maxlength="maxLength"
        @input="updateValue($event.target.value)"
      />
      <div v-if="characterCounter" class="textarea-custom-section is-character-counter">
        <span class="textarea-custom-text is-character-counter">{{ characterCounter }}/{{ maxLength }}</span>
      </div>
    </div>
    <div v-if="message" class="textarea-custom-section is-message">
      <span class="textarea-custom-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Textarea",

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
        }
      },
      isFluid: {
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
      height: {
        type: Number,
        default: 82,
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
        default: 524288,
      },
      label: {
        type: String,
      },
      message: {
        type: String,
      },
      onChangeTextarea: {
        type: Function,
      },
    },

    methods: {
      updateValue(value) {
        this.$emit('input', value);
        if(this.onChangeTextarea) {
          this.onChangeTextarea(value);
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .textarea-custom-container {
    /* Parent style   ------------------------------ */
    position: relative;
    display: inline-block;

    /* Children style ------------------------------ */
    .textarea-custom {
      @include placeholderTheme;
      @include typography-primary-medium-12;
      resize: none;
      width: 100%;
      /* height: $input-height; */
      padding: 9px 10px 10px 10px;
      background-color: $color-white;
      border: 1px solid $color-gray-3a15;
      border-radius: 4px;
      color: $color-gray-1;
      line-height: 1.5;
    }

    .textarea-custom-section {
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
        bottom: 10px;
        right: 10px;
      }
    }

    .textarea-custom-text {
      &.is-label {
        @include typography-primary-medium-12;
        color: $color-gray-3;
        /* text-transform: uppercase; */
      }

      &.is-mandatory {
        @include typography-primary-light-12;
        color: $color-red-1;
      }

      &.is-message {
        @include typography-primary-regular-12;
        color: $color-gray-3;
      }

      &.is-character-counter  {
        @include typography-primary-regular-12;
        color: $color-placeholder;
      }
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-fluid {
      width: 100%;
    }

    /* State */
    &.is-error {
      .textarea-custom {
        border-color: $color-error;
      }

      .textarea-custom-text {
        &.is-message,
        &.is-character-counter {
          color: $color-red-1;
        }
      }
    }

    &.is-disabled {
      .textarea-custom {
        pointer-events: none;
        background-color: $color-disabled;
        color: $color-gray-3;
      }
    }

    /* Specific */
    &.is-character-counter {
      .textarea-custom {
        padding: 9px 10px 26px 10px;
      }
    }
  }
</style>
