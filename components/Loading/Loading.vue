<template>
  <div
    :class="[
      'loading', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div
      v-if="isPulse"
      class="sk-pulse"
      :style="{
        width: sizePulse + 'px',
        height: sizePulse + 'px',
      }"
    >
    </div>

    <div
      v-if="isCircleFade"
      class="sk-circle-fade"
      :style="{
        width: sizeCircleFade + 'px',
        height: sizeCircleFade + 'px',
      }"
    >
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
      <div class="sk-circle-fade-dot"></div>
    </div>

    <div
      v-if="isFlow"
      class="sk-flow"
      :style="{
        width: sizeFlow,
        height: sizeFlow,
      }"

    >
      <div class="sk-flow-dot"></div>
      <div class="sk-flow-dot"></div>
      <div class="sk-flow-dot"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',

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
      sizePulse: {
        type: Number,
        default: 28,
      },
      sizeCircleFade: {
        type: Number,
        default: 15,
      },
      sizeFlow: {
        type: String,
        default: 'calc(30px * 1.3)',
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .loading {
    /* Parent style   ------------------------------ */
    display: inline-block;

    /* Children style ------------------------------ */
    /* spinkit : https://github.com/tobiasahlin/SpinKit */
    .sk-pulse {
      background-color: $color-primary-1;
    }

    .sk-flow {
      > div {
        background-color: $color-primary-1;
      }
    }

    .sk-circle-fade {
      > div {
        &:before {
          background-color: $color-primary-1;
        }
      }
    }

    /* Modifier style ------------------------------ */
  }
</style>
