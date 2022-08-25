<template>
  <div
    :class="[
      'panel-custom', {
      'is-fluid-vertical': isFluidVertical,
      'is-content-primary': isContentPrimary,
      'is-content-secondary': isContentSecondary,
      'is-content-tertiary': isContentTertiary,
      'is-content-modal': isContentModal,
      'is-header-actions': isHeaderActions,
      'is-border': isBorder,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div v-if="isHeadingPrimary" class="panel-custom-section is-heading-primary">
      <span class="panel-custom-text is-heading-primary">{{ heading }}</span>
      <slot name="actions" />
    </div>
    <div v-if="isHeadingSecondary" class="panel-custom-section is-heading-secondary">
      <span class="panel-custom-text is-heading-secondary">{{ heading }}</span>
      <slot name="actions" />
    </div>
    <div v-if="isHeadingTertiary" class="panel-custom-section is-heading-tertiary">
      <span class="panel-custom-text is-heading-tertiary">{{ heading }}</span>
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Panel',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isFluidVertical: {
        type: Boolean,
      },
      isContentPrimary: {
        type: Boolean,
      },
      isContentSecondary: {
        type: Boolean,
      },
      isContentTertiary: {
        type: Boolean,
      },
      isContentModal: {
        type: Boolean,
      },
      isHeadingPrimary: {
        type: Boolean,
      },
      isHeadingSecondary: {
        type: Boolean,
      },
      isHeadingTertiary: {
        type: Boolean,
      },
      isHeaderActions: {
        type: Boolean,
      },
      isBorder: {
        type: Boolean,
      },
      heading: {
        type: String,
        default: '-',
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

  .panel-custom {
    /* Parent style   ------------------------------ */
    padding: 15px;
    background-color: $color-purple-19;
    border-radius: 5px;
    position: relative;

    /* Children style ------------------------------ */
    .panel-custom-section {
      &.is-heading-primary {
        padding: 0 0 8px;
        margin: -5px 0 10px;
        border-bottom: 1px solid $color-gray-10;
      }

      &.is-heading-secondary {
        margin: 0 0 8px;
      }

      &.is-heading-tertiary {
        padding: 0 0 16px;
        margin: -5px 0 20px;
        border-bottom: 1px solid $color-gray-10;
      }
    }

    .panel-custom-text {
      &.is-heading-primary {
        @include typography-primary-medium-18;
        color: $color-gray-1;
      }

      &.is-heading-secondary {
        @include typography-primary-medium-16;
        color: $color-gray-1;
      }

      &.is-heading-tertiary {
        @include typography-primary-bold-20;
        color: $color-gray-1;
      }
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-fluid-vertical {
      min-height: 100%;
    }

    &.is-content-primary {
      padding: 24px;
    }

    &.is-content-secondary {
      background-color: $color-white;
      border: 1px solid $color-gray-10;
    }

    &.is-content-tertiary {
      padding: 24px;
      background-color: $color-white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    }

    &.is-content-modal {
      background-color: $color-purple-21;
    }

    &.is-header-actions {
      .panel-custom-section {
        &.is-heading-primary,
        &.is-heading-secondary {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }

    &.is-border {
      border: 1px solid $color-gray-10;
    }
  }
</style>
