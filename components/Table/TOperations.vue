<template>
  <div
    :class="[
      'toperation',
      {
        'is-getcase-actions': isGetCaseActions,
        'is-button-group': isButtonGroup,
        'is-button-group-center': isButtonGroupCenter,
        'is-button-action-claim': isButtonActionClaim,
        'is-more-detail': isMoreDetail,
        'is-transition-none': isTransitionNone,
        'is-transition': isTransition,
      },
      className,
    ]"
    :style="[inlineStyles]"
    @click="onClick"
  >
    <slot />
    <img
      v-if="isMoreDetail"
      class="toperation-image is-ic-arrow-more-detail"
      src="/images/icons/ic-arrow-more-detail.svg"
      alt="Icon"
    />
    <img
      v-if="isDelete"
      class="toperation-image is-block"
      src="/images/icons/ic-trash-red.svg"
      alt="Icon"
    />
    <img
      v-if="isViewDetail"
      class="toperation-image is-block"
      src="/images/icons/ic-document-blue.svg"
      alt="Icon"
    />
    <img
      v-if="isViewDetailSmall"
      class="toperation-image is-block is-ic-document-small"
      src="/images/icons/ic-document-blue.svg"
      alt="Icon"
    />
    <img
      v-if="isDownload"
      class="toperation-image is-block"
      src="/images/icons/ic-download-outline-blue.svg"
      alt="Icon"
    />
    <img
      v-if="isDownloadSmall"
      class="toperation-image is-block is-ic-download-small"
      src="/images/icons/ic-download-outline-blue.svg"
      alt="Icon"
    />
    <img
      v-if="isPrint"
      class="toperation-image is-block"
      src="/images/icons/ic-print-outline-blue.svg"
      alt="Icon"
    />
    <img
      v-if="isEdit"
      class="toperation-image is-block"
      src="/images/icons/ic-edit-outline-blue.svg"
      alt="Icon"
    />
    <img
      v-if="isPolicyBenefit"
      class="toperation-image is-block"
      src="/images/icons/ic-policy-benefit.svg"
      alt="Icon"
    />
    <img
      v-if="isAdd"
      class="toperation-image is-block"
      src="/images/icons/ic-add-circle-outline-green.svg"
      alt="Icon"
    />
    <img
      v-if="isInformation"
      class="toperation-image is-block"
      src="/images/icons/ic-information-outline-blue.svg"
      alt="Icon"
    />
    <div v-if="isView" class="toperation-image is-bg-image is-ic-view" />
    <div
      v-if="isViewChecked"
      class="toperation-image is-bg-image is-ic-view-checked"
    />
    <div
      v-if="isHospitalNotification"
      class="toperation-image is-bg-image is-ic-hospital-notification"
    />
    <div v-if="isHistory" class="toperation-button is-history">
      <img
        class="toperation-image is-block is-ic-history"
        src="/images/icons/ic-history-blue.svg"
        alt="Icon"
      />
      <span v-if="actionName" class="toperation-text is-action-name">{{
        actionName
      }}</span>
    </div>
    <div v-if="isActionLink" class="toperation-text is-action-link">
      {{ actionLink }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TOperation',

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {},
    },
    isButtonGroup: {
      type: Boolean,
    },
    isButtonGroupCenter: {
      type: Boolean,
    },
    isButtonActionClaim: {
      type: Boolean,
    },
    isMoreDetail: {
      type: Boolean,
    },
    isGetCaseActions: {
      type: Boolean,
    },
    isViewDetail: {
      type: Boolean,
    },
    isViewDetailSmall: {
      type: Boolean,
    },
    isDownload: {
      type: Boolean,
    },
    isDownloadSmall: {
      type: Boolean,
    },
    isPrint: {
      type: Boolean,
    },
    isEdit: {
      type: Boolean,
    },
    isPolicyBenefit: {
      type: Boolean,
    },
    isAdd: {
      type: Boolean,
    },
    isView: {
      type: Boolean, // Icon for claim case status
    },
    isViewChecked: {
      type: Boolean, // Icon for claim case status
    },
    isHospitalNotification: {
      type: Boolean, // Icon for claim case status
    },
    isDelete: {
      type: Boolean,
    },
    isHistory: {
      type: Boolean,
    },
    isActionLink: {
      type: Boolean,
    },
    isTransitionNone: {
      type: Boolean,
    },
    isTransition: {
      type: Boolean,
    },
    isInformation: {
      type: Boolean,
    },
    actionName: {
      type: String,
    },
    actionLink: {
      type: String,
    },
    onClick: {
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

.toperation {
  /* Parent style   ------------------------------ */
  @include button-transition;
  cursor: pointer;

  /* Children style ------------------------------ */
  .toperation-image {
    &.is-block {
      display: block;
    }

    &.is-ic-arrow-more-detail {
      position: relative;
      top: 2px;
    }

    &.is-bg-image {
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: $z-index-1;
      background-repeat: no-repeat;
      background-position: center;
    }

    &.is-ic-view {
      top: calc(50% + 1px);
      left: 50%;
      width: 15px;
      height: 19px;
      background-image: url('~static/images/icons/ic-document-blue.svg');
      background-size: 15px 19px;
    }

    &.is-ic-hospital-notification {
      top: calc(50% - 2px);
      left: calc(50% + 3px);
      width: 26px;
      height: 26px;
      background-image: url('~static/images/icons/ic-hospital-blue-notification.svg');
      background-size: 26px 26px;
    }

    &.is-ic-document-small {
      width: auto;
      height: 17px;
    }

    &.is-ic-download-small {
      width: auto;
      height: 16px;
    }

    &.is-ic-history {
      width: auto;
      height: 11px;
    }
  }

  .toperation-button {
    @include button-transition;

    &.is-history {
      display: inline-flex;
      align-items: center;
      padding: 2px 6px;
      border: 1px solid $color-primary-1;
      border-radius: 3px;

      &:hover {
        background-color: $color-blue-7;
      }
    }
  }

  .toperation-text {
    &.is-action-name {
      @include typography-primary-bold-10;
      position: relative;
      top: -1px;
      display: block;
      margin: 0 0 0 6px;
      color: $color-gray-1;
    }

    &.is-action-link {
      @include typography-primary-medium-12;
      display: block;
      color: $color-primary-1;
      text-decoration: underline;
    }
  }

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-transition-none {
    transition: none;

    &:active {
      opacity: 1;
    }
  }

  &.is-transition {
    @include button-transition;
  }

  &.is-getcase-actions {
    width: 64px;
    .tinfo {
      top: 2px;
    }
  }

  &.is-button-group,
  &.is-button-group-center {
    cursor: auto;
    display: flex;
    align-items: center;

    > * {
      margin: 0 0 0 10px;
      &:first-child {
        margin: 0;
      }
    }
  }

  &.is-button-group-center {
    justify-content: center;
  }

  &.is-button-action-claim {
    position: relative;
    width: 20px;
    height: $button-small-height;
  }

  &.is-more-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 32px;
  }
}
</style>
