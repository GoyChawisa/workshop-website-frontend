<template>
  <td
    :class="[
      'td-custom', {
      'is-number': isNumber,
      'is-code-benefit': isCodeBenefit,
      'is-more-detail': isMoreDetail,
      'is-operations': isOperations,
      'is-more-detail-control': isMoreDetailControl,
      'is-more-detail-content': isMoreDetailContent,
      'is-information-warning': isInformationWarning,
      'is-text-center': isTextCenter,
      'is-text-right': isTextRight,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
    :colspan="colspan"
  >
    <div v-if="isMoreDetailContent" class="td-custom-line-more-detail-content" />
    <slot />
    <div class="td-custom-line" />
  </td>
</template>

<script>
  export default {
    name: 'TD',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isNumber: {
        type: Boolean,
      },
      isCodeBenefit: {
        type: Boolean,
      },
      isMoreDetail: {
        type: Boolean,
      },
      isOperations: {
        type: Boolean,
      },
      isMoreDetailControl: {
        type: Boolean,
      },
      isMoreDetailContent: {
        type: Boolean,
      },
      isInformationWarning: {
        type: Boolean,
      },
      isTextCenter: {
        type: Boolean,
      },
      isTextRight: {
        type: Boolean,
      },
      colspan: {
        type: Number,
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

  .td-custom {
    /* Parent style   ------------------------------ */
    @include tableColumnPadding;
    position: relative;
    height: 52px;
    background-color: $color-blue-8;
    vertical-align: middle;

    &:after {
      content: " ";
      position: absolute;
      z-index: $z-index-1;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      border-bottom: 1px solid $color-gray-3a15;
    }

    /* Children style ------------------------------ */
    .td-custom-line {
      pointer-events: none;
      position: absolute;
      z-index: $z-index-1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      &:before,
      &:after {
        content: " ";
        position: absolute;
        z-index: $z-index-1;
        right: 0;
        left: 0;
        display: block;
        border-bottom: 4px solid $color-white;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }
    }

    .td-custom-line-more-detail-content {
      padding: 11px 0 0;
      border-top: 1px solid $color-white;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-number {
      width: 40px;
    }

    &.is-code-benefit {
      width: 55px;
    }

    &.is-more-detail {
      width: 34px;
    }

    &.is-operations {
      @include tableColumnOperationPadding;
    }

    &.is-more-detail-control,
    &.is-more-detail-content {
    }

    &.is-more-detail-control {
    }

    &.is-more-detail-content {
      display: none;
      height: auto;
      padding: 0 16px 18px; // 8px 16px 14px
      background-color: $color-blue-8;

      .td-custom-line {
        &:before {
          display: none;
        }
      }

      &.is-operations {
        padding: 8px 24px 14px 16px;
      }
    }

    &.is-information-warning {
      background-color: $color-red-8;

      &.is-more-detail-content {
        background-color: $color-red-9;
      }
    }

    /* Align */
    &.is-text-center {
      text-align: center;
    }

    &.is-text-right {
      text-align: right;
    }
  }
</style>