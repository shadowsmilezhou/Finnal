<template>
    <Panel :class="$style.panel" >
      <div :class="$style.content">
        <img  src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
        <p>会员福利 ></p>
      </div>
       
    </Panel>
    
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components:{
        Panel
    }
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
      @include panel;
      margin-bottom: 5px;
      .content{
        @include flex(row);
        box-sizing: border-box;
        justify-content: space-between;
      >h4{
        display: none
      }
      img{
          width: 100px;
          border-radius: 50%;
          margin: 20px 32px 10px 20px;
      }
      p{
          font-size: 26px;
          color:#666;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
          line-height: 125px;
     }

      }
     
  }
</style>

