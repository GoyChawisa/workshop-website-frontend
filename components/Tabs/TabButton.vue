<template>
  <Button
    :class="[
      'tab-button',
      {
        'is-active': isActive,
      },
      className,
    ]"
    :style="[inlineStyles]"
    :isTextBlue="isActive"
    :width="width"
    :onClick="onClick"
    :isColorGray="isInactive"
    :isTextGray="isInactive"
  >
    {{ name }}
  </Button>
</template>

<script>

import Icon from './../Icon/index.ts';
import Button from './../Button/index.ts';

export default {
  name: 'TabButton',

  components: {
    Icon: Icon.Icon,
    Button: Button.Button,
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
    onClick: {
      type: Function,
      default: function () {},
    },
    name: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    isInactive: {
      type: Boolean,
    },
    width: {
      type: Number,
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

.tab-button {
  /* Parent style   ------------------------------ */
  border-radius: 4px 4px 0px 0px;
  /* Children style ------------------------------ */
  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-active {
    background: $color-purple-19;
  }
}
</style>
