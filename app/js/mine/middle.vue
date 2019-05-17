<template>
    <Panel :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70" alt="">
                <p :class="$style.p1">我的资产</p>
                <p>查看全部资产 ></p>
            </li>
             <li :class="$style.item">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
                <p :class="$style.p1">我的优惠券</p>
                <p>查看全部 ></p>
            </li>
             <li :class="$style.item">
                 <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70" alt="">
                <p :class="$style.p1">我的借钱</p>
                <p>查看全部产品 ></p>
            </li>
   
        </ul>
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
@import '../../css/element.scss';
.panel {
    @include panel;
    >h4{
        display: none;
    }
    .content {
        @include flex(column);
        .item{
           @include flex(row);
           justify-content: space-between;
           padding-bottom:1px; 
           &:nth-child(3) img{
               width: 70px;
               height: 81px;
           }
           p{
               font-size: 26px;
               color: #666;
               padding: 0;
               margin-left: 0;
               line-height: 70px;
           }
           .p1{
               flex: 1
           }
        }
    }

}
</style>

