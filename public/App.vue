<template>
  <div class="main">
    <transition slot="main" name="translate" mode="out-in">
      <router-view>
        hahahhaha
      </router-view>
    </transition>
  </div>
</template>
<style>
  /* @import "./assets/scss/common.scss"; */
  .main{
    padding: 4px 15px 0 15px;
  }
</style>
<script>
  // import headerAside from 'headerAside'
  export default {
    components: {
      // headerAside
    }
  }
</script>