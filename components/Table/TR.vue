<template>
  <tr
    :class="[
      'tr-custom', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </tr>
</template>

<script>
  export default {
    name: 'TR',

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

  .tr-custom {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>