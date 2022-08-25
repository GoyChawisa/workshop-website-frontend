<template>
  <div :class="['pagination-custom', {}, className]" :style="[inlineStyles]">
    <Grid isVerticalCenter isGutter16>
      <GridCol>
        <Grid isVerticalCenter isGutter8>
          <GridCol>
            <span class="pagination-custom-text is-label-prefix">Showing</span>
          </GridCol>
          <GridCol>
            <Select
              isBlock
              isContentAbove
              :width="64"
              :value="itemPerPageValue"
              :options="itemPerPageOptions"
              @input="onChangePaginationLimit"
            />
          </GridCol>
          <GridCol>
            <span class="pagination-custom-text is-label-suffix"
              >Items/Page</span
            >
          </GridCol>
        </Grid>
      </GridCol>
      <GridCol>
        <Paginate
          :value="pageIndex"
          :pageCount="pageCount"
          :pageRange="pageRange"
          :marginPages="marginPages"
          :clickHandler="clickHandler"
          :prevText="prevText"
          :nextText="nextText"
          :containerClass="'vuejs-paginate'"
          :pageClass="'vuejs-paginate-list'"
          :activeClass="'vuejs-paginate-list-active'"
          :disabledClass="'vuejs-paginate-list-disabled'"
          :breakViewClass="'vuejs-paginate-list-breakview'"
          :pageLinkClass="'vuejs-paginate-button'"
          :prevLinkClass="'vuejs-paginate-button-prev'"
          :nextLinkClass="'vuejs-paginate-button-next'"
        />
      </GridCol>
    </Grid>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate';
import Select from './../Select/index.ts';
import Grid from './../Grid/index.ts';

export default {
  name: 'Pagination',

  components: {
    Paginate,
    Select: Select.Select,
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
      default: function () {},
    },
    itemPerPageValue: {
      type: Object,
      default: function () {
        return { name: '100', value: '100' };
      },
    },
    itemPerPageOptions: {
      type: Array,
      default: function () {
        return [
          { name: '10', value: '10' },
          { name: '50', value: '50' },
          { name: '100', value: '100' },
        ];
      },
    },
    pageIndex: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
      default: 5,
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    marginPages: {
      type: Number,
      default: 0,
    },
    clickHandler: {
      type: Function,
      default: function () {},
    },
    onChangePaginationLimit: {
      type: Function,
      default: function () {},
    },
    prevText: {
      type: String,
      default: '',
    },
    nextText: {
      type: String,
      default: '',
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

.pagination-custom {
  /* Parent style   ------------------------------ */
  display: flex;
  justify-content: flex-end;

  /* Children style ------------------------------ */
  .pagination-custom-text {
    &.is-label-prefix,
    &.is-label-suffix {
      position: relative;
      top: -1px;
    }

    &.is-label-prefix {
      @include typography-primary-medium-14;
      color: $color-gray-1;
    }

    &.is-label-suffix {
      @include typography-primary-regular-14;
      color: $color-gray-3;
    }
  }

  .vuejs-paginate {
    display: flex;
    margin-left: -8px;

    .vuejs-paginate-list {
    }

    li {
      padding-left: 8px;
    }

    .vuejs-paginate-list-active {
      .vuejs-paginate-button {
        cursor: auto;
        background-color: $color-purple-14;
        border: 1px solid $color-purple-14;
      }

      + .vuejs-paginate-list {
        .vuejs-paginate-button {
          /* border-left: 1px solid $color-blue-1; */
        }
      }

      + .vuejs-paginate-list-disabled {
        .vuejs-paginate-button-next {
          /* border-left: 1px solid $color-blue-1; */
        }
      }
    }

    .vuejs-paginate-list-disabled {
      .vuejs-paginate-button-prev,
      .vuejs-paginate-button-next {
        pointer-events: none;
        border: 1px solid $color-gray-3a15;
      }

      .vuejs-paginate-button-prev {
        &:after {
          background-image: url('~static/images/icons/ic-arrow-chevron-prev-gray.svg');
        }
      }

      .vuejs-paginate-button-next {
        &:after {
          background-image: url('~static/images/icons/ic-arrow-chevron-next-gray.svg');
        }
      }
    }

    .vuejs-paginate-list-breakview {
      display: none;
    }

    .vuejs-paginate-button,
    .vuejs-paginate-button-prev,
    .vuejs-paginate-button-next {
      @include typography-primary-medium-14;
      transition: $global-transition;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $color-primary-1;
      border-radius: 5px;
      color: $color-primary-1;

      &:focus {
        outline: none;
      }

      &:active {
        opacity: 0.75;
      }
    }

    .vuejs-paginate-button {
      width: 30px;
      padding: 4px 0 6px;
    }

    .vuejs-paginate-button-prev,
    .vuejs-paginate-button-next {
      position: relative;
      width: 30px;
      height: 30px;
      padding-right: 15px;
      padding-left: 15px;

      &:after {
        content: ' ';
        transform: translate(-50%, -50%);
        position: absolute;
        z-index: $z-index-1;
        top: 50%;
        left: 50%;
        display: block;
        width: 7px;
        height: 12px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 7px 12px;
      }
    }

    .vuejs-paginate-button-prev {
      &:after {
        background-image: url('~static/images/icons/ic-arrow-chevron-prev-purple.svg');
      }
    }

    .vuejs-paginate-button-next {
      &:after {
        background-image: url('~static/images/icons/ic-arrow-chevron-next-purple.svg');
      }
    }
  }

  /* Other component style ----------------------- */
  .multiselect-custom {
    .multiselect {
      min-height: 30px;
    }

    .multiselect__select {
      transition: none;
      height: calc(30px - 2px);
    }

    .multiselect__placeholder,
    .multiselect__input,
    .multiselect__single,
    .multiselect__option {
      @include typography-primary-medium-14;
    }

    .multiselect__input,
    .multiselect__single,
    .multiselect__option {
      color: $color-primary-1;
    }

    .multiselect__placeholder,
    .multiselect__single {
      padding-top: 4px;
    }

    .multiselect__tags {
      min-height: 30px;
    }

    .multiselect__input,
    .multiselect__single {
      min-height: calc(30px - 2px);
    }

    .multiselect__input {
      min-height: calc(30px - 3px);
    }

    .multiselect__option {
      padding: 6px 10px;
    }
  }

  /* Modifier style ------------------------------ */
}
</style>
