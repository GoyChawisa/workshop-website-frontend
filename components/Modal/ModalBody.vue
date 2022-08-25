<template>
  <div
    :class="[
      'modal-card-body',
      'modal-body-custom', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ModalBody',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
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

  .modal-body-custom {
    /* Parent style   ------------------------------ */
    @include scrollbar-overlay;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
