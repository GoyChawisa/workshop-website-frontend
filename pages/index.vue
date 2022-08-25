<template>
  <Panel
    isFluidVertical
    isContentTertiary
    isHeadingTertiary
    :heading="'Sample Table with Data'"
  >
    <div class="home">
      <Table isStripes>
        <THead>
          <TR>
            <TH isSticky isNumber><TInfo isHeading>ID</TInfo></TH>
            <TH isSticky>
              <TInfo isHeading>Name</TInfo>
            </TH>
            <TH isSticky>
              <TInfo isHeading>Email</TInfo>
            </TH>
          </TR>
        </THead>
        <TBody>
          <TR v-for="user in userList" :key="user.id">
            <TD isNumber>
              <TInfo>{{ user.id }}</TInfo>
            </TD>
            <TD>
              <TInfo>{{ user.name }}</TInfo>
            </TD>
            <TD>
              <TInfo>{{ user.email }}</TInfo>
            </TD>
          </TR>
        </TBody>
      </Table>
    </div>
  </Panel>
</template>

<script>
import Components from '~/components/index.ts';

export default {
  components: {
    ...Components,
  },

  async fetch() {
    const { data } = await this.$services.sample.getSampleList();
    this.userList = this.$_.take(data, 5);
    console.log(process.env.TEST_VAR, 'testtesttest');
  },
  data() {
    return {
      userList: [],
    };
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.home {
  /* Parent style   ------------------------------ */
  /* Children style ------------------------------ */
  /* Other component style ----------------------- */
}
</style>
