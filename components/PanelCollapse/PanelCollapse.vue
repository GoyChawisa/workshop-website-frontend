<template>
  <div
    :class="[
      'panel-collapse', {
      'is-open': isOpen,
      'is-no-button-collapse': isNoButtonCollapse,
      'is-fluid-vertical': isFluidVertical,
      'is-theme-gray': isThemeGray,
      'is-utilities': isUtilities,
      'is-continue-claim': isContinueClaim,
      'is-button-toggle-in-action': isButtonToggleInActions,
      'is-badge-orange': isBadgeOrange,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="panel-collapse-header">
      <Grid isGutter24 isVerticalCenter isSpacebetween>
        <GridCol>
          <Grid isGutter10 isVerticalCenter>
            <GridCol>
              <span class="panel-collapse-text is-heading">{{ heading }}</span>
            </GridCol>
            <GridCol v-if="badgeName">
              <div class="panel-collapse-section is-badge">
                <div class="panel-collapse-badge">
                  <span class="panel-collapse-text is-badge">{{ badgeName }}</span>
                </div>
              </div>
            </GridCol>
            <GridCol v-if="isIconWarning">
              <Icon
                isBlock
                :size="18"
                :icon="require('~/static/images/icons/ic-information-outline-red.svg')"
              />
            </GridCol>
          </Grid>
        </GridCol>
        <GridCol v-if="isShowActions">
          <div class="panel-collapse-section is-actions-container">
            <div class="panel-collapse-section is-actions">
              <Icon
                v-if="isButtonToggleInActions"
                isBlock
                class="panel-collapse-image is-ic-arrow-toggle-in-actions"
                :size="20"
                :icon="isThemeGray ? require('~/static/images/icons/ic-collapse-panel-line-blue.svg') : require('~/static/images/icons/ic-collapse-panel-blue.svg')"
                :onClick="onClickToggleContent"
              />
              <slot name="actions" />
            </div>
          </div>
        </GridCol>
      </Grid>
      <Icon
        v-if="!isButtonToggleInActions"
        isBlock
        class="panel-collapse-image is-ic-arrow-toggle"
        :size="20"
        :icon="isThemeGray ? require('~/static/images/icons/ic-collapse-panel-line-blue.svg') : require('~/static/images/icons/ic-collapse-panel-blue.svg')"
        :onClick="onClickToggleContent"
      />
    </div>
    <div v-if="isUtilities" class="panel-collapse-section is-utilities-container">
      <slot name="utilities" />
    </div>
    <div v-if="isOpen" class="panel-collapse-body">
      <slot />
    </div>
  </div>
</template>

<script>
  import Icon from './../Icon/index.ts';
  import Grid from './../Grid/index.ts';

  export default {
    name: 'PanelCollapse',

    components: {
      Icon: Icon.Icon,
      Grid: Grid.Grid,
      GridCol: Grid.GridCol,
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
      isOpen: {
        type: Boolean,
      },
      isUtilities: {
        type: Boolean,
      },
      isNoButtonCollapse: {
        type: Boolean,
      },
      isFluidVertical: {
        type: Boolean,
      },
      isThemeGray: {
        type: Boolean,
      },
      isContinueClaim: {
        type: Boolean,
      },
      isButtonToggleInActions: {
        type: Boolean,
        default: false,
      },
      isShowActions: {
        type: Boolean,
        default: true,
      },
      isIconWarning: {
        type: Boolean,
      },
      isBadgeOrange: {
        type: Boolean,
      },
      heading: {
        type: String,
        default: 'Heading',
      },
      badgeName: {
        type: String,
      },
      onClickToggleContent: {
        type: Function,
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

  .panel-collapse {
    /* Parent style   ------------------------------ */
    position: relative;
    padding: 13px 16px 16px;
    background-color: $color-white;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(125, 138, 139, 0.2);

    /* Children style ------------------------------ */
    .panel-collapse-header {
      position: relative;
      padding: 0 36px 0 0;
    }

    .panel-collapse-body {
      visibility: hidden;
      position: absolute;
      z-index: $z-index-1;
      top: 0;
      left: 0;
      padding: 16px 0 0;
      margin: 16px 0 0;
      border-top: 1px solid $color-gray-3a25;
    }

    .panel-collapse-section {
      &.is-actions-container {
        position: relative;
        top: 2px;
        height: 20px;
      }

      &.is-actions {
        transform: translateY(-50%);
        position: relative;
        top: 50%;
      }

      &.is-utilities-container {
        padding: 16px 0 0;
        margin: 16px 0 0;
        border-top: 1px solid $color-gray-3a25;
      }

      &.is-badge {
        height: 21px;
      }
    }

    .panel-collapse-text {
      &.is-heading {
        @include typography-primary-semibold-18;
        color: $color-gray-1;
      }

      &.is-badge {
        @include typography-primary-medium-12;
        color: $color-primary-1;
      }
    }

    .panel-collapse-image {
      &.is-ic-arrow-toggle {
        cursor: pointer;
        transform: translateY(-50%);
        position: absolute;
        z-index: $z-index-1;
        top: calc(50% + 2px);
        right: 0;

        &:active {
          opacity: 0.75;
        }
      }

      &.is-ic-arrow-toggle-in-actions {
        @include button-transition;
      }
    }

    .panel-collapse-badge {
      transform: translateY(-50%);
      position: relative;
      top: calc(50% + 1px);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      padding: 0 16px;
      background-color: $color-blue-1a15;
      border: 1px solid $color-primary-1;
      border-radius: 14px;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-open {
      > .panel-collapse-header {
        .panel-collapse-image {
          &.is-ic-arrow-toggle {
            transform: translateY(-50%) rotate(180deg);
          }

        }
      }

      .is-ic-arrow-toggle-in-actions{
        transform: rotate(180deg);
      }

      .panel-collapse-body {
        visibility: visible;
        position: static;
      }

      &.is-utilities {
        .panel-collapse-body {
          margin: 0;
          border-top: none;
        }
      }
    }

    &.is-no-button-collapse {
      .panel-collapse-header {
        padding: 0;
      }

      .panel-collapse-image {
        &.is-ic-arrow-toggle {
          display: none !important;
        }
      }
    }

    &.is-fluid-vertical {
      height: 100%;
    }

    &.is-theme-gray {
      background-color: $color-purple-18;
      box-shadow: none;

      .panel-collapse-text {
        &.is-heading {
          @include typography-primary-semibold-16;
          position: relative;
          top: 2px;
        }
      }
    }

    &.is-button-toggle-in-action {
      .panel-collapse-header {
        padding: 0;
      }

      .panel-collapse-section {
        &.is-actions {
          display: flex;
          align-items: center;
        }
      }
    }

    &.is-badge-orange {
      .panel-collapse-badge {
        background-color: $color-orange-4;
        border: 1px solid $color-orange-1;
      }

      .panel-collapse-text {
        &.is-badge {
          color: $color-orange-1;
        }
      }
    }

    /* Specific */
    &.is-continue-claim {
      .panel-collapse-body {
        height: calc(100% - 37px);
      }
    }
  }
</style>
