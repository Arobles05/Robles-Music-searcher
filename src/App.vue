<template lang="pug">
  #app
    pm-header
    
    router-view
  
    pm-Footer
</template>

<script>

import PmFooter from './components/footer.vue'
import PmHeader from './components/Header.vue'

export default {
  name: 'app',
  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
@import './scss/main.scss';
 .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #3695d4 solid;
  }
</style>
