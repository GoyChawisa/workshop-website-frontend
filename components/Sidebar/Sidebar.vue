<template>
  <div
    :class="[
      'sidebar',
      {
        'is-expand': isExpand,
      },
      className,
    ]"
    :style="[inlineStyles]"
  >
    <div class="sidebar-section is-primary">
      <div class="sidebar-section is-logo" @click="() => {}">
        <img
          class="sidebar-image is-logo"
          src="/images/logos/logo.png"
          alt="Logo"
        />
        <div class="sidebar-section is-name">
          <span class="sidebar-text is-name-primary">
            RED
            <span class="sidebar-text is-name-secondary">LAMP</span>
          </span>
        </div>
      </div>
      <div class="sidebar-lists is-menu">
        <div v-if="true" class="sidebar-list">
          <nuxt-link :to="'/'">
            <div
              :class="[
                'sidebar-button is-primary',
                { 'is-active': isMenuDashboard },
              ]"
              @click="() => {}"
            >
              <div class="sidebar-image is-icon-menu">
                <img
                  class="sidebar-image is-block"
                  :src="isMenuDashboard ? '/images/icons/ic-dashboard-white.svg' : '/images/icons/ic-dashboard-red.svg'"
                  alt="Icon"
                />
              </div>
              <span class="sidebar-text is-menu">Dashboard</span>
              <div class="sidebar-tooltip">
                <span class="sidebar-text is-tooltip">Dashboard</span>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div v-if="true" class="sidebar-list">
          <nuxt-link :to="'/'">
            <div
              :class="[
                'sidebar-button is-primary',
                { 'is-active': isMenuSettings },
              ]"
              @click="() => {}"
            >
              <div class="sidebar-image is-icon-menu">
                <img
                  class="sidebar-image is-block"
                  :src="isMenuSettings ? '/images/icons/ic-setting-white.svg' : '/images/icons/ic-setting-red.svg'"
                  alt="Icon"
                />
              </div>
              <span class="sidebar-text is-menu">Settings</span>
              <div class="sidebar-tooltip">
                <span class="sidebar-text is-tooltip">Settings</span>
              </div>
            </div>
          </nuxt-link>
        </div>
        <!-- <div class="sidebar-list">
          <div class="sidebar-line is-partition" />
        </div> -->
        <div class="sidebar-list">
          <div
            class="sidebar-button is-secondary is-space-between"
            @click="() => {}"
          >
            <div class="sidebar-section is-user">
              <div class="sidebar-image is-icon-menu">
                <div class="sidebar-image is-user">
                  <img :src="srcImageUser" alt="User" />
                </div>
              </div>
              <span class="sidebar-text is-menu">username</span>
            </div>
            <div class="sidebar-image is-icon-menu-secondary">
              <img
                class="sidebar-image is-block"
                :src="isExpand ? '/images/icons/ic-logout-white.svg' : '/images/icons/ic-logout-red.svg'"
                alt="Icon"
              />
            </div>
            <div class="sidebar-tooltip">
              <span class="sidebar-text is-tooltip">Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-section is-secondary">
      <div
        class="sidebar-button is-secondary is-icon-only"
        @click="onClickToggleExpand"
      >
        <img
          class="sidebar-image is-block"
          src="/images/icons/ic-toggle-expand-red.svg"
          alt="Icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {},
    },
    isExpand: {
      type: Boolean,
    },
    isMenuDashboard: {
      type: Boolean,
    },
    isMenuSettings: {
      type: Boolean,
    },
    srcImageUser: {
      type: String,
      default: '/images/graphics/placeholder-image-user.svg',
    },
    onClickToggleExpand: {
      type: Function,
      default: function () {},
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

/* Component variables */
$sidebar-button-height: 44px;

.sidebar {
  /* Parent style   ------------------------------ */
  transition: $elastic-transition;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: $sidebar-collapse-width;
  height: 100vh;
  padding: 24px 16px 16px;
  background-color: $color-white;

  /* Children style ------------------------------ */
  .sidebar-section {
    &.is-primary {
    }

    &.is-secondary {
      padding: 16px 0 0;
    }

    &.is-logo {
      @include button-transition;
      position: relative;
      left: -3px;
      display: flex;
      align-items: center;
      margin: 0 0 24px;
    }

    &.is-name {
      transition: $global-transition;
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
      width: 0;
      padding: 0 0 0 12px;
    }

    &.is-user {
      /* Default sidebar is collapse */
      transition: $global-transition;
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
      width: 0;
      display: flex;
      align-items: center;
    }
  }

  .sidebar-lists {
    &.is-menu {
      .sidebar-list {
        margin: 0 0 8px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }

  .sidebar-button {
    @include button-transition;

    &:hover {
      .sidebar-tooltip {
        visibility: visible;
        opacity: 1;
        left: calc(100% + 8px);
      }
    }

    &.is-primary,
    &.is-secondary {
      position: relative;
      display: flex;
      align-items: center;
      height: $sidebar-button-height;
      border-radius: 4px;
    }

    &.is-primary {
      padding: 0 4px 0 0;
    }

    &.is-secondary {
      background-color: $color-red-24;
    }

    &.is-icon-only {
      justify-content: center;
      width: $sidebar-button-height;
    }

    &.is-space-between {
      justify-content: space-between;
      padding: 0 10px 0 0;
    }

    &.is-active {
      background-color: $color-red-21;

      .sidebar-text {
        &.is-menu {
          @include typography-primary-bold-14;
          color: $color-white;
        }
      }
    }
  }

  .sidebar-image {
    &.is-logo {
      width: 44px;
    }

    &.is-icon-menu {
      display: flex;
      flex: none;
      justify-content: center;
      align-items: center;
      width: $sidebar-button-height;
      height: $sidebar-button-height;
    }

    &.is-icon-menu-secondary {
      transition: $global-transition;
      display: flex;
      flex: none;
      justify-content: center;
      align-items: center;
      /* Default sidebar is collapse */
      width: 44px;
      height: 44px;
      border-radius: 5px;

      img {
        width: 18px;
      }
    }

    &.is-user {
      @include image-border;
      overflow: hidden;
      position: relative;
      vertical-align: middle;
      width: 26px;
      padding-bottom: 26px;
      border-radius: 13px;

      img {
        position: absolute;
        z-index: $z-index-1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &.is-icon-history {
      width: 22px;
    }

    &.is-icon-upload {
      width: 22px;
    }
  }

  .sidebar-text {
    &.is-menu {
      @include typography-primary-medium-14;
      position: relative;
      top: -1px;
      /* Default sidebar is collapse */
      transition: $global-transition;
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
      white-space: nowrap;
      color: $color-black;
    }

    &.is-tooltip {
      @include typography-primary-regular-10;
      position: relative;
      top: -1px;
      color: $color-white;
      white-space: nowrap;
    }

    &.is-name-primary {
      @include typography-primary-bold-20;
      color: $color-red-21;
      letter-spacing: 3px;
      white-space: nowrap;
    }

    &.is-name-secondary {
      @include typography-primary-bold-20;
      color: $color-gray-20;
      letter-spacing: 3px;
      white-space: nowrap;
    }
  }

  .sidebar-line {
    &.is-partition {
      /* padding: 0 0 8px; */
      margin: 0 -16px;
      border-top: 1px solid $color-red-23;
    }
  }

  .sidebar-tooltip {
    transition: $global-transition;
    transform: translateY(-50%);
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    z-index: $z-index-10;
    top: 50%;
    left: 100%;
    padding: 0 8px 4px;
    background-color: $color-black;
    border-radius: 3px;

    &:after {
      content: ' ';
      pointer-events: none;
      position: absolute;
      top: 50%;
      right: 100%;
      width: 0;
      height: 0;
      margin-top: -4px;
      border: solid transparent;
      border-color: transparent;
      border-right-color: $color-black;
      border-width: 4px;
    }
  }

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-expand {
    width: $sidebar-width;

    .sidebar-section {
      &.is-name,
      &.is-user {
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
        width: 100%;
      }
    }

    .sidebar-text {
      &.is-menu {
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
      }
    }

    .sidebar-image {
      &.is-icon-menu-secondary {
        width: 24px;
        height: 24px;
        background-color: $color-red-21;

        img {
          width: auto;
        }
      }

      &.is-logo {
        width: 44px;
        height: auto;
      }
    }

    .sidebar-tooltip {
      display: none;
    }
  }
}
</style>
