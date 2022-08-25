<template>
  <div
    :class="[
      'modal-card-head',
      'modal-header-custom', {
        'is-theme-red': isThemeRed,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <p class="modal-card-title">
      <slot />
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ModalHeader',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isThemeRed: {
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

  .modal-header-custom {
    /* Parent style   ------------------------------ */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 16px 24px;
    background: $color-blue-1;
    border: 0;

    /* Children style ------------------------------ */
    .modal-card-title {
      @include typography-primary-medium-18;
      display: flex;
      align-items: center;
      color: $color-white;
    }

    .icon-custom {
      margin-right: 20px;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-theme-red {
      background: $color-red-1;
    }
  }
</style>
