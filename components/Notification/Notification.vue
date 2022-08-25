<template>
  <div
    :class="[
      'vue-notification-custom', {
      'is-success': isSuccess,
      'is-error': isError,
      'is-warning': isWarning,
      'is-notice': isNotice,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <!-- <client-only> -->
      <notifications
        :group="group"
        :duration="duration"
        :position="position"
      />
    <!-- </client-only> -->
  </div>
</template>

<script>
  export default {
    name: 'Notification',

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
      isSuccess: {
        type: Boolean,
      },
      isError: {
        type: Boolean,
      },
      isWarning: {
        type: Boolean,
      },
      isNotice: {
        type: Boolean,
      },
      group: {
        type: String,
      },
      position: {
        type: String,
        default: 'top center',
      },
      duration: {
        type: Number,
        default: 5000, // -1 for disable auto close // Default 5000
      },
    },

    mounted() {
      // Something
    },

    data() {
      return {
        // Something
      };
    },

    methods: {
      function_name() {
        // Function
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .vue-notification-custom {
    /* Parent style   ------------------------------ */
    position: fixed;
    z-index: $z-index-9999;
    top: 0;
    left: 0;

    /* Children style ------------------------------ */
    .vue-notification-group {
      transform: translateX(-50%);
      top: 16px !important;
      left: 50% !important;
      width: 100% !important;
      max-width: 540px;
    }

    .vue-notification-wrapper {
      overflow: visible; // Change from 'hidden' because display box-shadow
      margin-bottom: 16px;
    }

    .vue-notification {
      @include typography-primary-medium-14;
      position: relative;
      padding: 13px 48px 15px 24px;
      margin: 0 30px;
      color: $color-white;
      background: $color-primary-1;
      border-left: none;
      border-radius: 5px;

      &:after {
        content: ' ';
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 48px;
        height: 100%;
        background-size: 12px 13px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .notification-content {}

    /* Modifier style ------------------------------ */
    &.is-success {
      .vue-notification {
        background-color: $color-green-5;
        border: 1px solid $color-green-4;
        color: $color-green-1;

        &:after {
          background-image: url('/images/icons/ic-close-slim-green.svg');
        }
      }
    }

    &.is-error {
      .vue-notification {
        background-color: $color-red-6;
        border: 1px solid $color-red-3;
        color: $color-red-1;

        &:after {
          background-image: url('/images/icons/ic-close-slim-red.svg');
        }
      }
    }

    &.is-warning {
      .vue-notification {
        background-color: $color-orange-4;
        border: 1px solid $color-orange-3;
        color: $color-orange-1;

        &:after {
          background-image: url('/images/icons/ic-close-slim-orange.svg');
        }
      }
    }

    &.is-notice {
      .vue-notification {
        background-color: $color-blue-4;
        border: 1px solid $color-blue-2;
        color: $color-blue-1;

        &:after {
          background-image: url('/images/icons/ic-close-slim-blue.svg');
        }
      }
    }
  }
</style>
