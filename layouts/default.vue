<template>
  <Layout>
    <Grid class="is-main-layout">
      <GridCol isNarrow>
        <Sidebar
          :isExpand="isOpenSideMenu"
          :isMenuDashboard="true"
          :isMenuSettings="false"
          :srcImageUser="'/images/graphics/placeholder-image-user-white.svg'"
          :onClickToggleExpand="toggleSideMenu"
        />
      </GridCol>
      <GridCol isGrow>
        <Container isMainContent>
          <nuxt />
        </Container>
      </GridCol>
    </Grid>

    <!-- Notification -->
    <Notification :group="'VALIDATION'" v-bind="alertData" />

    <!-- Loading Overlay -->
    <LoadingOverlay
      v-if="isShowLoading"
      :isFlow="true"
      :isPulse="false"
      :isCircleFade="false"
    />
  </Layout>
</template>

<script>
import Components from '~/components/index.ts';

export default {
  components: {
    ...Components,
  },

  computed: {
    alertData() {
      return this.$services.main.getAlertData();
    },
    isShowLoading() {
      return this.$services.main.getIsShowLoading();
    },
  },

  data() {
    const isOpenSideMenu = this.$services.main.getIsOpenSideMenu();
    return {
      isOpenSideMenu,
    };
  },

  mounted() {
    // this.$notify({
    //   group: 'VALIDATION',
    //   text: 'Notification message.',
    // });
  },

  methods: {
    toggleSideMenu() {
      this.isOpenSideMenu = !this.isOpenSideMenu;
      this.$services.main.setIsOpenSideMenu(this.isOpenSideMenu);
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.grid {
  &.is-main-layout {
    > .grid-col {
    }
  }
}
</style>
