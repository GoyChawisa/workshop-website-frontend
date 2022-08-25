<template>
  <table
    :class="[
      'table-custom',
      {
        'is-stripes': isStripes,
        'is-border': isBorder,
        'is-theme-primary': isThemePrimary,
        'is-theme-secondary': isThemeSecondary,
        'is-theme-secondary-slim': isThemeSecondarySlim,
        'is-coverage': isCoverage,
        'is-coverage-summary': isCoverageSummary,
        'is-coverage-summary-overbenefit': isCoverageSummaryOverBenefit,
        'is-coverage-notrelated-incurredamount':
          isCoverageNotRelatedIncurredAmount,
      },
      className,
    ]"
    :style="[inlineStyles]"
  >
    <slot />
  </table>
</template>

<script>
export default {
  name: 'Table',

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {},
    },
    isBorder: {
      type: Boolean,
    },
    isStripes: {
      type: Boolean,
    },
    isThemePrimary: {
      type: Boolean,
    },
    isThemeSecondary: {
      type: Boolean,
    },
    isThemeSecondarySlim: {
      type: Boolean,
    },
    isCoverage: {
      type: Boolean,
    },
    isCoverageSummary: {
      type: Boolean,
    },
    isCoverageSummaryOverBenefit: {
      type: Boolean,
    },
    isCoverageNotRelatedIncurredAmount: {
      type: Boolean,
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

.table-custom {
  /* Parent style   ------------------------------ */
  width: 100%;

  /* Children style ------------------------------ */
  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-stripes {
    .tbody-custom {
      .tr-custom {
        &:last-child {
          .td-custom {
            &:after {
              display: none;
            }
          }
        }

        .td-custom {
          &:after {
            display: block;
          }
        }
      }

      &:nth-child(odd) {
        .tr-custom {
          &:first-child {
            .td-custom {
              background-color: $color-blue-8;
            }
          }
        }
      }
    }

    .tr-custom {
      &:nth-child(even) {
        .td-custom {
          background-color: $color-white;
        }
      }
    }
  }

  &.is-border {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      height: auto;
      padding: 8px;
      background-color: $color-white;
      border-right: 1px solid $color-black;
      border-bottom: 1px solid $color-black;

      &:first-child {
        padding: 8px;
        border-left: 1px solid $color-black;
      }

      &:last-child {
        padding: 8px;
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
          border-top: 1px solid $color-black;
          background-color: $color-white;
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {}

        .td-custom-line {
          display: none;
        }
      }
    }
  }

  &.is-theme-primary {
    .thead-custom {
      .tr-custom {
        .th-custom {
          &:first-child {
            padding: 4px 4px 4px 16px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }

          &:last-child {
            padding: 4px 16px 4px 4px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
        }
      }
    }

    .tbody-custom {
      &:before {
        content: ' ';
        display: block;
        height: 8px;
      }

      .tr-custom {
        .td-custom {
          height: 36px;
          padding: 4px;
          background-color: $color-white;

          &:first-child {
            padding: 4px 4px 4px 16px;
          }

          &:last-child {
            padding: 4px 16px 4px 4px;
          }

          &.is-operations {
            padding: 4px 24px 4px 4px;
          }
        }

        .td-custom-line {
          display: none;
        }
      }
    }
  }

  &.is-theme-secondary {
    .thead-custom {
      .tr-custom {
        .th-custom {
          background-color: $color-white;
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
          height: 44px;
          background-color: $color-white;
        }

        .td-custom-line {
          display: none;
        }
      }
    }
  }

  &.is-theme-secondary-slim {
    .thead-custom {
      .tr-custom {
        .th-custom {
          background-color: $color-white;
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
          height: 32px;
          padding: 4px;
          background-color: $color-white;

          &:first-child {
            padding: 4px 4px 4px 16px;
          }

          &:last-child {
            padding: 4px 16px 4px 4px;
          }

          &.is-operations {
            padding: 4px 24px 4px 4px;
          }
        }

        .td-custom-line {
          display: none;
        }
      }
    }
  }

  /* Specific */
  &.is-opd {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 90px;
      }

      &.is-id-card {
        width: 115px;
      }

      &.is-insurer {
        width: 115px;
      }

      &.is-policy-no {
        min-width: 115px; // width
      }

      &.is-certificate-no {
        width: 90px;

        @media (min-width: 1441px) {
          text-align: left;
        }
      }

      &.is-reference-no {
        width: 100px;
      }

      &.is-hospital-clinic {
        width: 115px;
      }

      &.is-accident-date {
        width: 110px;
      }

      &.is-admission-date {
        width: 90px;
      }

      &.is-case-status {
        width: 65px;
      }

      &.is-actions {
        width: 113px;
      }

      &.is-id-card,
      &.is-insurer,
      &.is-created-by,
      &.is-certificate-no,
      &.is-reference-no,
      &.is-hospital-clinic,
      &.is-accident-date,
      &.is-admission-date,
      &.is-case-status {
        @media (min-width: 1441px) {
          width: calc(100% / 11);
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-admission-pre-arrangement {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 90px;
      }

      &.is-id-card {
        width: 115px;
      }

      &.is-type {
        width: 115px;
      }

      &.is-policy-no {
        min-width: 115px; // width
      }

      &.is-certificate-no {
        width: 90px;

        @media (min-width: 1441px) {
          text-align: left;
        }
      }

      &.is-reference-no {
        width: 100px;
      }

      &.is-hospital-clinic {
        width: 115px;
      }

      &.is-accident-date {
        width: 110px;
      }

      &.is-admission-date {
        width: 90px;
      }

      &.is-case-status {
        width: 65px;
      }

      &.is-actions {
        width: 113px;
      }

      &.is-id-card,
      &.is-created-by,
      &.is-type,
      &.is-certificate-no,
      &.is-reference-no,
      &.is-hospital-clinic,
      &.is-accident-date,
      &.is-admission-date,
      &.is-case-status {
        @media (min-width: 1441px) {
          width: calc(100% / 11);
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-discharge {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 90px;
      }

      &.is-id-card {
        width: 115px;
      }

      &.is-type {
        width: 115px;
      }

      &.is-policy-no {
        min-width: 115px; // width
      }

      &.is-certificate-no {
        width: 90px;

        @media (min-width: 1441px) {
          text-align: left;
        }
      }

      &.is-reference-no {
        width: 100px;
      }

      &.is-hospital-clinic {
        width: 115px;
      }

      &.is-accident-date {
        width: 110px;
      }

      &.is-admission-date {
        width: 90px;
      }

      &.is-case-status {
        width: 65px;
      }

      &.is-actions {
        width: 113px;
      }

      &.is-id-card,
      &.is-type,
      &.is-created-by,
      &.is-certificate-no,
      &.is-reference-no,
      &.is-hospital-clinic,
      &.is-accident-date,
      &.is-admission-date,
      &.is-case-status {
        @media (min-width: 1441px) {
          width: calc(100% / 11);
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-claim-history-table {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 90px;
      }

      &.is-claim-di-no {
        width: 170px;
      }

      &.is-id-card {
        width: 115px;
      }

      &.is-type {
        width: 115px;
      }

      &.is-policy-no {
        min-width: 115px; // width
      }

      &.is-certificate-no {
        width: 90px;

        @media (min-width: 1441px) {
          text-align: left;
        }
      }

      &.is-reference-no {
        width: 100px;
      }

      &.is-hospital-clinic {
        width: 115px;
      }

      &.is-accident-date {
        width: 110px;
      }

      &.is-admission-date {
        width: 90px;
      }

      &.is-case-status {
        width: 65px;
      }

      &.is-actions {
        width: 113px;
      }

      &.is-id-card,
      &.is-type,
      &.is-certificate-no,
      &.is-reference-no,
      &.is-hospital-clinic,
      &.is-accident-date,
      &.is-admission-date,
      &.is-case-status {
        @media (min-width: 1441px) {
          width: calc(100% / 11);
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-reimbursement {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 129px;
      }

      &.is-id-card {
        width: 125px;
      }

      &.is-type {
        width: 55px;
      }

      &.is-policy-no {
        min-width: 108px; // width
      }

      &.is-certificate-no {
        width: 90px;

        @media (min-width: 1441px) {
          text-align: left;
        }
      }

      &.is-reference-no {
        width: 108px;
      }

      &.is-hospital-clinic {
        width: 115px;
      }

      &.is-accident-date {
        width: 167px;
      }

      &.is-admission-date {
        width: 190px;
      }

      &.is-staff-no {
        width: 96px;
      }

      &.is-created-by {
        width: 75px; // 65
      }

      &.is-case-status {
        width: 75px; // 65
      }

      &.is-actions {
        width: 113px;
      }

      &.is-id-card,
      &.is-created-by,
      &.is-hospital-clinic,
      &.is-accident-date,
      &.is-case-status {
        @media (min-width: 1441px) {
          width: calc(100% / 11);
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-policy-inquiry {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 90px;
      }

      &.is-id-card {
        width: 115px;
      }

      &.is-insurer {
        width: 735px;
      }

      &.is-policy-no {
        min-width: 115px; // width
      }

      &.is-certificate-no {
        width: 90px;

        @media (min-width: 1441px) {
          text-align: left;
        }
      }

      &.is-reference-no {
        width: 100px;
      }

      &.is-hospital-clinic {
        width: 115px;
      }

      &.is-accident-date {
        width: 110px;
      }

      &.is-admission-date {
        width: 90px;
      }

      &.is-case-status {
        width: 65px;
      }

      &.is-actions {
        width: 90px;
      }

      &.is-id-card,
      &.is-certificate-no,
      &.is-reference-no,
      &.is-hospital-clinic,
      &.is-accident-date,
      &.is-admission-date,
      &.is-case-status {
        @media (min-width: 1441px) {
          width: calc(100% / 11);
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-log {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-datetime {
        width: 125px;
      }

      &.is-status {
      }

      &.is-account {
        width: 100px;
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-benefit-detail {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-limit-per {
        width: 105px;
      }

      &.is-benefit {
      }

      &.is-max-day {
        width: 185px;
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-special-handling {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-file-name {
      }

      &.is-uploaded-date {
      }

      &.is-actions {
        width: 125px;
        text-align: center;

        .toperation {
          .toperation-image {
            margin: auto;
          }
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-icd,
  &.is-reject-code {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-code {
        width: 60px;
      }

      &.is-description {
      }

      &.is-order {
        width: 75px;

        .tinfo {
          &.is-order {
            top: 0;
          }
        }
      }

      &.is-select {
        width: 50px;

        .checkbox-custom {
          top: 3px;
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-file {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-file-name {
      }

      &.is-uploaded-by {
      }

      &.is-uploaded-date {
      }

      &.is-actions {
        width: 120px;
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-hospital-expense {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-label {
      }

      &.is-cost {
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-continue-claim {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-reference-no {
        /* width: 115px; */
      }

      &.is-hospital {
      }

      &.is-status {
      }

      &.is-approved-amount {
        width: 110px;
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-coverage {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-benefit {
        width: 20%;

        @media (min-width: 1537px) {
          width: 30%;
        }
      }

      &.is-cost {
        width: 13.33%; // Coverage 6 Columns

        @media (min-width: 1537px) {
          width: 11.66%;
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
          padding: 8px 12px; // 8px 12px
          background-color: $color-white;

          &:first-child {
            padding: 8px 8px 8px 16px; // 8px 12px 8px 16px
          }

          &:last-child {
            padding: 8px 16px 8px 8px; // 8px 16px 8px 12px
          }

          &.is-operations {
            padding: 8px 24px 8px 8px; // 8px 24px 8px 12px
          }
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
          height: auto;
          padding: 12px 8px; // 12px
          background-color: $color-white;
          vertical-align: top;

          &:after {
            display: none;
          }

          &:first-child {
            padding: 12px 8px 12px 16px; // 12px 12px 12px 16px
          }

          &:last-child {
            padding: 12px 16px 12px 8px; // 2px 16px 12px 12px
          }

          &.is-operations {
            padding: 12px 24px 12px 8px; // 12px 24px 12px 12px
          }
        }

        &:nth-child(1) {
          .td-custom {
            height: auto;
            padding: 8px 8px 12px; // 8px 12px 12px
            background-color: $color-blue-1a25;

            &:first-child {
              padding: 8px 8px 12px 16px; // 8px 12px 12px 16px
            }

            &:last-child {
              padding: 8px 16px 12px 8px; // 8px 16px 12px 12px
            }

            &.is-operations {
              padding: 8px 24px 12px 8px; // 8px 24px 12px 12px
            }

            .td-custom-line {
              &:before {
                display: none;
              }
            }
          }
        }

        &:nth-child(2) {
          .td-custom {
            height: auto;
            padding: 20px 8px 12px; // 20px 12px 12px

            &:first-child {
              padding: 20px 8px 12px 16px; // 20px 12px 12px 16px
            }

            &:last-child {
              padding: 20px 16px 12px 8px; // 20px 16px 12px 12px
            }

            &.is-operations {
              padding: 20px 24px 12px 8px; // 20px 24px 12px 12px
            }
          }
        }

        &:last-child {
          .td-custom {
            padding: 12px 8px 24px; // 12px 12px 24px

            &:first-child {
              padding: 12px 8px 24px 16px; // 12px 12px 24px 16px
            }

            &:last-child {
              padding: 12px 16px 24px 8px; // 12px 16px 24px 12px
            }

            &.is-operations {
              padding: 12px 24px 24px 8px; // 12px 24px 24px 12px
            }
          }
        }
      }
    }

    &.is-coverage-summary {
      .tbody-custom {
        .tr-custom {
          &:nth-child(1) {
            .td-custom {
              transition: $global-transition;
              height: auto; // 76px
              padding: 8px 8px 16px; // 0 12px
              background-color: $color-primary-1;
              vertical-align: middle;

              &:first-child {
                padding: 32px 8px 16px 16px; // 0 12px 0 16px
              }

              &:last-child {
                padding: 8px 16px 16px 8px; // 0 16px 0 12px
              }

              &.is-operations {
                padding: 8px 24px 16px 8px; // 0 24px 0 12px
              }

              .td-custom-line {
                &:after {
                  display: none;
                }
              }
            }
          }
        }
      }

      .tsection {
        &.is-info-pertime {
          margin: 0 0 8px;
        }

        &.is-label,
        &.is-coverage {
          width: 105px;
        }

        &.is-coverage {
          text-align: right;
        }
      }
    }

    &.is-coverage-summary-overbenefit,
    &.is-coverage-notrelated-incurredamount {
      position: relative;

      .tbody-custom {
        .tr-custom {
          &:nth-child(1) {
            .td-custom {
              height: 116px;
              padding: 40px 8px 0; // 40px 12px 0
              background-color: $color-red-1;
              vertical-align: middle;

              &:first-child {
                padding: 40px 8px 0 16px; // 40px 12px 0 16px
              }

              &:last-child {
                padding: 40px 16px 0 8px; // 40px 16px 0 12px
              }

              &.is-operations {
                padding: 40px 24px 0 8px; // 40px 24px 0 12px
              }

              .td-custom-line {
                &:after {
                  display: none;
                }
              }
            }
          }
        }
      }

      &:before {
        @include typography-primary-bold-16;
        position: absolute;
        z-index: $z-index-1;
        top: 0;
        right: 0;
        left: 0;
        display: block;
        padding: 8px 0;
        background-color: $color-red-1;
        border-bottom: 1px solid $color-red-3;
        color: $color-white;
        text-align: center;
      }
    }

    &.is-coverage-summary-overbenefit {
      &:before {
        content: 'Over hospital expenses';
      }
    }

    &.is-coverage-notrelated-incurredamount {
      &:before {
        content: 'Coverage is not related with incurred amount';
      }
    }
  }

  &.is-claim-history {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-reference-no {
        width: 110px;
      }

      &.is-claim-no {
        width: 125px;
      }

      &.is-claim-channel {
        width: 80px;
      }

      &.is-benefit-type {
        width: 70px;
      }

      &.is-claim-type {
        width: 65px;
      }

      &.is-icd10 {
        width: 55px;
      }

      &.is-icd9 {
        width: 55px;
      }

      &.is-accident-date {
        width: 80px;
      }

      &.is-admission-date {
        width: 80px;
      }

      &.is-status {
      }

      &.is-incurred-amount {
        width: 95px;
      }

      &.is-coverage {
        width: 95px;
      }

      &.is-hospital-clinic {
        /* width: 150px; */
      }

      &.is-operaations {
        width: 70px;

        .toperation {
          img {
            margin: auto;
          }
        }
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-claim-note,
  &.is-policy-claim-note {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-reference-no {
        width: 110px;
      }

      &.is-claim-no {
        width: 125px;
      }

      &.is-note {
      }

      &.is-created-by,
      &.is-edited-by {
        width: 125px;
      }

      &.is-operations {
        width: 110px;

        .toperation {
          .toperation-image {
            margin: auto;
          }
        }
      }

      &.is-operation-edit {
        width: 110px;

        .toperation {
          .toperation-image {
            margin: auto;
          }
        }
      }

      &.is-operation-add {
        width: 45px;
        padding: 8px 16px 8px 4px;

        .toperation {
          .toperation-image {
            margin: auto;
          }
        }
      }

      &.is-textarea {
        padding: 11px 8px 8px;
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
          padding: 11px 4px 10px;
          vertical-align: top;

          &:first-child {
            padding: 11px 4px 10px 16px;

            &.is-textarea {
              padding: 11px 8px 8px;
            }
          }

          &.is-created-by,
          &.is-edited-by {
            .tinfo {
              top: -3px;
            }
          }

          &.is-operations,
          &.is-operation-edit {
            .toperation {
              padding: 4px 0 0;
            }
          }

          &.is-operations,
          &.is-operation-add {
            padding: 11px 16px 10px 4px;
          }

          &.is-operation-add {
            .toperation {
              padding: 3px 0 0;
            }
          }

          &.is-button-more {
            @include button-transition;
            background-color: $color-blue-1a50;

            &:first-child {
              height: 24px;
              padding: 0;
            }
          }
        }
      }
    }
  }

  &.is-policy-claimdi-list {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-clam-di-no {
        width: 90px;
      }
      &.is-accident-date {
        width: 110px;
      }
      &.is-claimant {
        width: 450px;
      }
      &.is-operations {
        width: 110px;

        .toperation {
          .toperation-image {
            margin: auto;
          }
        }
      }
    }
  }

  &.is-policy-all-claimants {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-name-surname {
        min-width: 90px;
      }

      &.is-id-card {
        width: 135px;
      }

      &.is-dob {
        width: 150;
      }

      &.is-age {
        width: 85px;
      }

      &.is-sex {
        width: 79px;
      }

      &.is-claimant {
        width: 145px;
      }

      &.is-driving-licence {
        width: 156px;
      }

      &.is-benefit {
        width: 553px;
      }

      &.is-operations {
        width: 110px;

        .toperation {
          .toperation-image {
            margin: auto;
          }
        }
      }
    }
  }

  &.is-policy-claim-note {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-reference-no,
      &.is-claim-no {
      }

      &.is-note {
      }

      &.is-created-by,
      &.is-edited-by {
      }

      &.is-operations {
      }

      &.is-operation-edit {
        width: 75px;
      }

      &.is-operation-add {
      }

      &.is-textarea {
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }

      &.is-open {
        .tr-custom {
          .td-custom {
            padding: 10px 4px 11px;

            &:first-child {
              padding: 10px 4px 11px 16px;

              &.is-button-more {
                padding: 0;
              }
            }

            &:after {
              display: none; // line gray
            }

            .td-custom-line {
              &:before {
                border-bottom: none;
              }

              &:after {
                border-bottom: 1px solid $color-white;
              }
            }

            &.is-operation-add {
              padding: 10px 16px 11px 4px;
            }

            .icon-custom {
              &.is-button-more {
                transform: rotate(180deg);
              }
            }
          }

          &:first-child {
            .td-custom {
              padding: 13px 4px 8px;

              .td-custom-line {
                &:before {
                  border-bottom: 4px solid $color-white;
                }
              }

              &:first-child {
                padding: 13px 4px 8px 16px;
              }

              &.is-operation-add {
                padding: 13px 16px 8px 4px;
              }
            }
          }

          &:last-child {
            .td-custom {
              .td-custom-line {
                &:after {
                  display: none;
                }
              }
            }
          }
        }
      }

      &:nth-child(odd) {
        .tr-custom {
          .td-custom {
            background-color: $color-white;

            &.is-button-more {
              background-color: $color-blue-1a50;

              .td-custom-line {
                &:before,
                &:after {
                  display: none;
                }
              }
            }
          }
        }

        &.is-open {
          .tr-custom {
            .td-custom {
              .td-custom-line {
                &:after {
                  border-bottom: 1px solid $color-gray-3a15;
                }
              }
            }
          }
        }
      }
    }
  }

  &.is-file-result {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-sheet-name {
        min-width: 105px;
      }
      &.is-sheet-no {
        width: 95px;
      }
      &.is-row-no {
        width: 95px;
      }
      &.is-error-column-etail {
      }
    }

    .thead-custom {
      .tr-custom {
        .th-custom {
        }
      }
    }

    .tbody-custom {
      .tr-custom {
        .td-custom {
        }
      }
    }
  }

  &.is-gop {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-los {
        width: 70px;
      }

      &.is-cost {
        width: 140px;
      }

      &.is-cost-summary {
        width: 280px;
      }
    }
  }

  &.is-claim-result {
    .thead-custom .th-custom,
    .tbody-custom .td-custom {
      &.is-no {
        width: 70px;
      }

      &.is-description {
      }

      &.is-cost {
        width: 175px;
      }
    }
  }
}
</style>
