<template>
  <div
    :class="[
      'image-ratio', {
      'is-action': isAction,
      'is-border-gray': isBorderGray,
      }, className,
    ]"
    :style="[
      {
        width: width + widthUnit,
        paddingBottom: height + heightUnit,
        borderRadius: borderRadius + borderRadiusUnit,
        borderTopRightRadius: borderTopRightRadius + borderRadiusUnit,
        borderTopLeftRadius: borderTopLeftRadius + borderRadiusUnit,
        borderBottomRightRadius: borderBottomRightRadius + borderRadiusUnit,
        borderBottomLeftRadius: borderBottomLeftRadius + borderRadiusUnit,
      },
      inlineStyles,
    ]"
    v-on:click="onClick"
  >
    <img
      class="image-ratio-src"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
  export default {
    name: "ImageRatio",

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function () {
          return {
            // Style
          };
        },
      },
      isAction: {
        type: Boolean,
      },
      isBorderGray: {
        type: Boolean,
      },
      width: {
        type: Number,
        default: 100,
      },
      widthUnit: {
        type: String,
        default: '%'
      },
      height: {
        type: Number,
        default: 57,
      },
      heightUnit: {
        type: String,
        default: '%'
      },
      borderRadius: {
        type: Number,
      },
      borderTopRightRadius: {
        type: Number,
      },
      borderTopLeftRadius: {
        type: Number,
      },
      borderBottomRightRadius: {
        type: Number,
      },
      borderBottomLeftRadius: {
        type: Number,
      },
      borderRadiusUnit: {
        type: String,
        default: 'px'
      },
      src: {
        type: String,
        default: '/images/graphics/placeholder-image-landscape.svg',
      },
      alt: {
        type: String,
        default: '',
      },
      onClick: {
        type: Function,
        default: function() {},
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .image-ratio {
    /* Parent style   ------------------------------ */
    overflow: hidden;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    /* Children style ------------------------------ */
    .image-ratio-src {
      position: absolute;
      z-index: $z-index-1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Modifier style ------------------------------ */
    &.is-action {
      cursor: pointer;
    }

    &.is-border-gray {
      background-color: $color-gray-15;
      box-shadow: 0 1px 0 0 $color-gray-15; /* Border bottom */
      box-shadow: 0 -1px 0 0 $color-gray-15; /* Border top */
      box-shadow: -1px 0 0 0 $color-gray-15; /* Border left */
      box-shadow: 1px 0 0 0 $color-gray-15; /* Border right */
      box-shadow: 0 0 0 1px $color-gray-15; /* All the borders by using the spread properties */
    }
  }
</style>
