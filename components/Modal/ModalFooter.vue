<template>
  <div
    :class="[
      'modal-card-foot',
      'modal-footer-custom', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <Grid
      className="has-width-100"
      :isCenter="isCenter"
      :isRight="isRight"
    >
      <GridCol>
        <slot />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
  export default {
    name: 'ModalFooter',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isCenter: {
        type: Boolean,
      },
      isRight: {
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

  .modal-footer-custom {
    /* Parent style   ------------------------------ */
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 16px;
    background: $color-gray-17;
    border: 0;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
