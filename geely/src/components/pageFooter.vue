<template>
  <div class="footer">
    上海圣禹电子科技<br/>
    <span>&copy;{{ msg2 }}</span>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data(){
      return {
        msg:"上海圣禹电子科技",
        msg2:"1998-2017. All Right Reserved"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    color: white;
    height: 50px;
    width: 100%;
    overflow: hidden;
    background-color: rgb(16,61,94);
    position: absolute;
    bottom: 0;
    text-align: center;
  }
</style>
