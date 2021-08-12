<template>
  <div>Home</div>
</template>

<script>
import { TestApi } from '@/api';

export default {
  name: 'home',

  mounted () {
    // this.test();
  },

  methods: {
    async test () {
      const resData = await TestApi.test();
      console.log(resData);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Home.scss';
</style>
