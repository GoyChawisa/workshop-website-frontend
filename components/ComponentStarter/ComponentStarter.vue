<template>
  <div
    :class="[
      'component-starter', {
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
  // import OTHER_FOLDER_COMPONENT_NAME from './../OTHER_FOLDER_COMPONENT_NAME/index.ts';
  // import SAME_FOLDER_COMPONENT_NAME from './SAME_FOLDER_COMPONENT_NAME';

  export default {
    name: 'ComponentStarter',

    // components: {
    //   OTHER_FOLDER_COMPONENT_NAME: OTHER_FOLDER_COMPONENT_NAME.OTHER_FOLDER_COMPONENT_NAME,
    //   SAME_FOLDER_COMPONENT_NAME,
    // },

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

  .component-starter {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
