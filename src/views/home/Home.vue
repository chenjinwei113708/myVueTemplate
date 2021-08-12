<template>
  <div>home</div>
</template>

<script>
import { TestApi } from '@/api';

export default {
  name: 'home',

  mounted () {
    this.test();
  },

  methods: {
    async test () {
      const resData = await TestApi.test();
      const reslogin = await TestApi.login();
      console.log(resData);
      console.log(reslogin);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Home.scss';
</style>
