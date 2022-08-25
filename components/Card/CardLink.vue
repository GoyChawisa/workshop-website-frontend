<template>
  <div
    :class="[
      'card-link', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="card-link-section is-label">
      <span class="card-link-text is-label">{{ headingSecondary }}</span>
    </div>
    <div class="card-link-section is-heading">
      <span class="card-link-text is-heading">{{ headingPrimary }}</span>
    </div>
    <div class="card-link-section is-icon">
      <div class="card-link-section is-icon-hover">
        <Icon
          :isSize="false"
          :width="iconWidth"
          :height="iconHeight"
          :icon="iconHoverSrc"
        />
      </div>
      <Icon
        :isSize="false"
        :width="iconWidth"
        :height="iconHeight"
        :icon="iconSrc"
      />
    </div>
  </div>
</template>

<script>
  import Icon from './../Icon/index.ts';

  export default {
    name: 'CardLink',

    components: {
      Icon: Icon.Icon,
    },

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      headingPrimary: {
        type: String,
        default: '-',
      },
      headingSecondary: {
        type: String,
        default: '-',
      },
      iconWidth: {
        type: Number,
      },
      iconHeight: {
        type: Number,
      },
      iconSrc: {
        type: String,
      },
      iconHoverSrc: {
        type: String,
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

  .card-link {
    /* Parent style   ------------------------------ */
    transition: $global-transition;
    padding: 24px;
    background-color: $color-white;
    border: 2px solid $color-primary-1;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: $color-primary-1;

      .card-link-section {
        &.is-icon-hover {
          transform: scale(1.25);
          opacity: 1;
        }
      }

      .card-link-text {
        &.is-label,
        &.is-heading {
          color: $color-white;
        }
      }
    }

    /* Children style ------------------------------ */
    .card-link-section {
      &.is-label {}

      &.is-heading {
        margin: 0 0 16px;
      }

      &.is-icon {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
      }

      &.is-icon-hover {
        transition: $global-transition;
        opacity: 0;
        position: absolute;
        z-index: $z-index-1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .card-link-text {
      transition: $global-transition;

      &.is-label {
        @include typography-primary-regular-12;
        color: $color-primary-1;
      }

      &.is-heading {
        @include typography-primary-bold-28;
        color: $color-primary-1;
        text-transform: uppercase;
      }
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
