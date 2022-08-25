<template>
  <span
    :class="[
      'tinfo', {
      'is-heading': isHeading,
      'is-heading-large': isHeadingLarge,
      'is-info-large': isInfoLarge,
      'is-info-bold-large': isInfoBoldLarge,
      'is-metadata': isMetaData,
      'is-block': isBlock,
      'is-label': isLabel,
      'is-word-breakall': isWordBreakAll,
      'is-tooltip': tooltip,
      'is-ellipsis': isEllipsis,
      'is-badge is-badge-red': isBadgeRed,
      'is-order': isOrder,
      'is-blue': isBlue,
      'is-gray-light': isGrayLight,
      'is-black': isBlack,
      'is-status is-status-approved': isStatusApproved,
      'is-status is-status-paid': isStatusPaid,
      'is-status is-status-active': isStatusActive,
      'is-status is-status-request-document': isStatusRequestDocument,
      'is-status is-status-onprocess': isStatusOnProcess,
      'is-status is-status-discharge-process': isStatusDischargeProcess,
      'is-status is-status-payment-process': isStatusPaymentProcess,
      'is-status is-status-payment': isStatusPayment,
      'is-status is-status-waiting-for-approve': isStatusWaitingForApprove,
      'is-status is-status-waiting-for-discharge': isStatusWaitingForDischarge,
      'is-status is-status-draft': isStatusDraft,
      'is-status is-status-canceled': isStatusCanceled,
      'is-status is-status-rejected': isStatusRejected,
      'is-status is-status-defend': isStatusDefend,
      'is-status is-status-timeout': isStatusTimeout,
      'is-status is-status-inactive': isStatusInactive,
      'is-status is-status-close': isStatusClose,
      'is-name-getcase': isNameGetCase,
      'is-benefit-header-code': isBenefitHeaderCode,
      'is-benefit-header-title': isBenefitHeaderTitle,
      'is-benefit-header-description': isBenefitHeaderDescription,
      'is-benefit-code': isBenefitCode,
      'is-benefit-title': isBenefitTitle,
      'is-benefit-description': isBenefitDescription,
      'is-summary': isSummary,
      'is-summary-total': isSummaryTotal,
      'is-paragraph': isParagraph,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
    :title="title"
    :data-tooltip="tooltip"
  >
    <span v-if="isEllipsis"><slot /></span>
    <slot v-else />
  </span>
</template>

<script>
  export default {
    name: 'TInfo',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      isHeading: {
        type: Boolean,
      },
      isHeadingLarge: {
        type: Boolean,
      },
      isInfoLarge: {
        type: Boolean,
      },
      isInfoBoldLarge: {
        type: Boolean,
      },
      isMetaData: {
        type: Boolean,
      },
      isBlock: {
        type: Boolean,
      },
      isLabel: {
        type: Boolean,
      },
      isWordBreakAll: {
        type: Boolean,
      },
      isEllipsis: {
        type: Boolean,
      },
      isBadgeRed: {
        type: Boolean,
      },
      isOrder: {
        type: Boolean,
      },
      isBlue: {
        type: Boolean,
      },
      isGrayLight: {
        type: Boolean,
      },
      isBlack: {
        type: Boolean,
      },
      isStatusApproved: {
        type: Boolean,
      },
      isStatusPaid: {
        type: Boolean,
      },
      isStatusActive: {
        type: Boolean,
      },
      isStatusRequestDocument: {
        type: Boolean,
      },
      isStatusOnProcess: {
        type: Boolean,
      },
      isStatusDischargeProcess: {
        type: Boolean,
      },
      isStatusPaymentProcess: {
        type: Boolean,
      },
      isStatusPayment: {
        type: Boolean,
      },
      isStatusWaitingForApprove: {
        type: Boolean,
      },
      isStatusWaitingForDischarge: {
        type: Boolean,
      },
      isStatusDraft: {
        type: Boolean,
      },
      isStatusCanceled: {
        type: Boolean,
      },
      isStatusRejected: {
        type: Boolean,
      },
      isStatusDefend: {
        type: Boolean,
      },
      isStatusTimeout: {
        type: Boolean,
      },
      isStatusInactive: {
        type: Boolean,
      },
      isStatusClose: {
        type: Boolean,
      },
      isNameGetCase: {
        type: Boolean,
      },
      isBenefitHeaderCode: {
        type: Boolean,
      },
      isBenefitHeaderTitle: {
        type: Boolean,
      },
      isBenefitHeaderDescription: {
        type: Boolean,
      },
      isBenefitCode: {
        type: Boolean,
      },
      isBenefitTitle: {
        type: Boolean,
      },
      isBenefitDescription: {
        type: Boolean,
      },
      isSummary: {
        type: Boolean,
      },
      isSummaryTotal: {
        type: Boolean,
      },
      isParagraph: {
        type: Boolean,
      },
      title: {
        type: String,
      },
      tooltip: {
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

  .tinfo {
    /* Parent style   ------------------------------ */
    @include typography-primary-regular-12;
    position: relative;
    top: -1px;
    display: inline-block;
    color: $color-gray-1;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-heading {
      @include typography-primary-extrabold-12;
      position: relative;
      top: -2px;
      color: $color-white;
    }

    &.is-heading-large {
      @include typography-primary-bold-14;
    }

    &.is-info-large {
      @include typography-primary-regular-14;
    }

    &.is-info-bold-large {
      @include typography-primary-bold-14;
    }

    &.is-metadata {
      @include typography-primary-regular-10;
      color: $color-gray-1;
    }

    &.is-label {
      @include typography-primary-bold-12;
      color: $color-gray-1;
    }

    &.is-word-breakall {
      word-break: break-all;
    }

    &.is-tooltip {
      @include tooltip;
    }

    &.is-ellipsis {
      width: 99%;

      span {
        @include ellipsis;
      }
    }

    &.is-badge {
      display: inline-flex;
      align-items: center;
      height: 18px;
      padding: 0 12px;
      border-radius: 9px;
      color: $color-white;
    }

    &.is-badge-red {
      background-color: $color-red-1;
    }

    &.is-order {
      @include typography-primary-medium-12;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      margin: auto;
      background-color: $color-white;
      border: 1px solid $color-primary-1;
      border-radius: 10px;
      color: $color-primary-1;
    }

    &.is-paragraph {
      line-height: 1.5;
    }

    /* Color */
    &.is-blue {
      color: $color-primary-1;
    }

    &.is-gray-light {
      color: $color-gray-3a50;
    }

    &.is-black {
      color: $color-black;
    }

    /* Status */
    &.is-status {
      padding: 0 0 0 12px;

      &:before {
        content: " ";
        transform: translateY(-50%);
        position: absolute;
        z-index: $z-index-1;
        top: 50%;
        left: 0;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 3px;
      }
    }

    &.is-status-approved {
      color: $color-approved-text;

      &:before {
        background-color: $color-approved;
      }
    }

    &.is-status-paid {
      color: $color-paid-text;

      &:before {
        background-color: $color-paid;
      }
    }

    &.is-status-active {
      color: $color-active;

      &:before {
        background-color: $color-active;
      }
    }

    &.is-status-request-document {
      color: $color-request-document-text;

      &:before {
        background-color: $color-request-document;
      }
    }

    &.is-status-onprocess {
      color: $color-onprocess-text;

      &:before {
        background-color: $color-onprocess;
      }
    }

    &.is-status-discharge-process {
      color: $color-discharge-process;

      &:before {
        background-color: $color-discharge-process;
      }
    }

    &.is-status-payment-process {
      color: $color-payment-process-text;

      &:before {
        background-color: $color-payment-process;
      }
    }

    &.is-status-payment {
      color: $color-payment-text;

      &:before {
        background-color: $color-payment;
      }
    }

    &.is-status-waiting-for-approve {
      color: $color-waiting-for-approve;

      &:before {
        background-color: $color-waiting-for-approve;
      }
    }

    &.is-status-waiting-for-discharge {
      color: $color-waiting-for-discharge;

      &:before {
        background-color: $color-waiting-for-discharge;
      }
    }

    &.is-status-draft {
      color: $color-draft;

      &:before {
        background-color: $color-draft;
      }
    }

    &.is-status-canceled {
      color: $color-canceled-text;

      &:before {
        background-color: $color-canceled;
      }
    }

    &.is-status-rejected {
      color: $color-rejected-text;

      &:before {
        background-color: $color-rejected;
      }
    }

    &.is-status-defend {
      color: $color-defend;

      &:before {
        background-color: $color-defend;
      }
    }

    &.is-status-timeout {
      color: $color-timeout;

      &:before {
        background-color: $color-timeout;
      }
    }

    &.is-status-inactive {
      color: $color-inactive;

      &:before {
        background-color: $color-inactive;
      }
    }

    &.is-status-close {
      color: $color-close-text;

      &:before {
        background-color: $color-close;
      }
    }

    /* Specific */
    &.is-name-getcase {
      width: 64px;
    }

    &.is-benefit-header-code,
    &.is-benefit-code {
      display: inline-block;
      width: 30px;
      white-space: nowrap;
    }

    &.is-benefit-header-code {
      @include typography-primary-semibold-12;
      position: relative;
      top: -4px;
      color: $color-primary-1;
    }

    &.is-benefit-header-title {
      @include typography-primary-bold-12;
      display: block;
      color: $color-primary-1;
    }

    &.is-benefit-header-description {
      @include typography-primary-regular-10;
      display: block;
      color: $color-primary-1;
    }

    &.is-benefit-code {
      @include typography-primary-semibold-12;
      position: relative;
      top: -4px;
      color: $color-gray-3;
    }

    &.is-benefit-title {
      @include typography-primary-bold-12;
      display: block;
      color: $color-gray-1;
    }

    &.is-benefit-description {
      @include typography-primary-regular-10;
      display: block;
      color: $color-gray-3;
    }

    &.is-summary {
      @include typography-primary-medium-12;
      display: block;
      color: $color-white;
    }

    &.is-summary-total {
      @include typography-primary-bold-16; // 14
      display: block;
      color: $color-white;
    }
  }
</style>