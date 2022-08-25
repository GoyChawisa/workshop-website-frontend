<template>
  <div
    id="main-container"
    :class="[
      'container-custom',
      {
        'is-main-content': isMainContent,
      },
      className,
    ]"
    :style="[inlineStyles]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {},
    },
    isMainContent: {
      type: Boolean,
    },
  },

  mounted() {},

  data() {
    return {};
  },

  methods: {
    function_name() {},
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.container-custom {
  /* Parent style   ------------------------------ */
  /* Children style ------------------------------ */
  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-main-content {
    @include scrollbar-overlay;
    height: 100vh;
    padding: 24px;
    background-color: $color-gray-15;
  }
}
</style>
