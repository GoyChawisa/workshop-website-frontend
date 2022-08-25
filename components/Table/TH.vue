<template>
  <th
    :class="[
      'th-custom', {
      'is-operations': isOperations,
      'is-number': isNumber,
      'is-code-benefit': isCodeBenefit,
      'is-more-detail': isMoreDetail,
      'is-sticky': isSticky,
      'is-text-center': isTextCenter,
      'is-text-right': isTextRight,
      'is-nowrap': isNoWrap,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </th>
</template>

<script>
  export default {
    name: 'TH',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isOperations: {
        type: Boolean,
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
      isSticky: {
        type: Boolean,
      },
      isTextCenter: {
        type: Boolean,
      },
      isTextRight: {
        type: Boolean,
      },
      isNoWrap: {
        type: Boolean,
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

  .th-custom {
    /* Parent style   ------------------------------ */
    @include tableColumnPadding;
    height: 36px;
    background-color: $color-red-21;
    vertical-align: middle;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-operations {
      @include tableColumnOperationPadding;
    }

    &.is-number {
      width: 40px;
    }

    &.is-code-benefit {
      width: 55px;
    }

    &.is-more-detail {
      width: 34px;
    }

    &.is-sticky {
      position: sticky;
      z-index: $z-index-9;
      top: -16px;
    }

    /* Align */
    &.is-text-center {
      text-align: center;
    }

    &.is-text-right {
      text-align: right;
    }

    &.is-nowrap {
      white-space: nowrap;
    }
  }
</style>