<template>
  <div class="Content">
    <pageheader></pageheader>
    <div class="mid-part">
      <router-view></router-view>
    </div>
    <pagefooter></pagefooter>
  </div>
</template>

<script>
  import pagefooter from '../pageHeader.vue'
  import pageheader from  '../pageFooter.vue'
  export default {
    name: 'Content',
    data () {
      return {
      
      }
    },
    components:{
      pagefooter,
      pageheader
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .Content{
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  .mid-part{
    position: absolute;
    top: 55px;
    bottom: 50px;;
    width: 100%;
  }
</style>
