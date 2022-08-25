<template>
  <Layout>
    <div class="blank-layout-container">
      <nuxt />
    </div>
  </Layout>
</template>

<script>
import Components from "~/components/index.ts";

export default {
  components: {
    ...Components,
  },
}
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .blank-layout-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 60px;
  }
</style>
