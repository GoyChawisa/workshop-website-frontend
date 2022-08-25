<template>
  <div
    :class="[
      'loading-overlay', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <Loading
      :isPulse="isPulse"
      :isCircleFade="isCircleFade"
      :isFlow="isFlow"
    />
  </div>
</template>

<script>
  import Loading from './Loading';

  export default {
    name: 'LoadingOverlay',

    components: {
      Loading
    },

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {
          return {
            // Style
          };
        },
      },
      isPulse: {
        type: Boolean,
      },
      isCircleFade: {
        type: Boolean,
      },
      isFlow: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  @keyframes fadeIn {
    0%   {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .loading-overlay {
    /* Parent style   ------------------------------ */
    animation-name: fadeIn;
    animation-duration: 0.3s;
    position: fixed;
    z-index: $z-index-9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-overlay-white;

    /* Children style ------------------------------ */
    /* Modifier style ------------------------------ */
  }
</style>
