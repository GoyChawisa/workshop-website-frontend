<template>
  <div
    :class="[
      'layout',
      isAndroid,
      isIOS,
      isChrome,
      isSafari,
      isMobileSafari,
      className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </div>
</template>

<script>
  import {
    isAndroid,
    isIOS,
    isChrome,
    isSafari,
    isMobileSafari,
  } from "mobile-device-detect";

  export default {
    name: "Layout",

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
    },

    data () {
      return {
        isAndroid: isAndroid && "is-android",
        isIOS: isIOS && "is-ios",
        isChrome: isChrome && "is-chrome",
        isSafari: isSafari && "is-safari",
        isMobileSafari: isMobileSafari && "is-mobile-safari",
      }
    }
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .layout {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Modifier style ------------------------------ */
  }
</style>
