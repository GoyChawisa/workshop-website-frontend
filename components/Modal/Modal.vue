<template>
  <div
    :class="[
      'modal',
      'modal-custom', {
        'is-active': isShow,
        'is-small': isSmall,
        'is-medium': isMedium,
        'is-extra-medium': isExtraMedium,
        'is-large': isLarge,
        'is-extra-large': isExtraLarge,
        'is-big': isBig,
        'is-generate-pdf': isGeneratePdf,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="modal-background" @click="onBackdrop"></div>
    <div class="modal-card">
      <slot />
    </div>
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
      isShow: {
        type: Boolean,
      },
      isSmall: {
        type: Boolean,
      },
      isMedium: {
        type: Boolean,
      },
      isExtraMedium: {
        type: Boolean,
      },
      isLarge: {
        type: Boolean,
      },
      isExtraLarge: {
        type: Boolean,
      },
      isBig: {
        type: Boolean,
      },
      isGeneratePdf: {
        type: Boolean,
      },
      onBackdrop: {
        type: Function,
        default: function() {},
      }
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes moveUp {
    0% {
      transform: translateY(32px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .modal-custom {
    /* Parent style   ------------------------------ */
    animation-name: fadeIn;
    animation-duration: 0.3s;

    /* Children style ------------------------------ */
    .modal-card {
      animation-name: moveUp;
      animation-duration: 0.3s;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-small {
      .modal-card {
        @media (min-width: 769px) {
          width: $modal-small-width;
        }
      }
    }

    &.is-medium {
      .modal-card {
        @media (min-width: 769px) {
          width: $modal-medium-width;
        }
      }
    }

    &.is-extra-medium {
      .modal-card {
        @media (min-width: 769px) {
          width: $modal-extra-medium-width;
        }
      }
    }

    &.is-large {
      .modal-card {
        @media (min-width: 769px) {
          width: $modal-large-width;
        }
      }
    }

    &.is-extra-large {
      .modal-card {
        @media (min-width: 769px) {
          width: $modal-extra-large-width;
        }
      }
    }

    &.is-big {
      .modal-card {
        @media (min-width: 769px) {
          width: $modal-big-width;
        }
      }
    }

    &.is-generate-pdf {
      visibility: hidden;
      opacity: 0;
    }
  }
</style>
