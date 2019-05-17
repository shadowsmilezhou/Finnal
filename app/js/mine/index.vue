<template>
    <div>
        <Heador></Heador>
        <Head></Head>
        <Middle></Middle>
        <Bottom></Bottom>
        <Footer></Footer>
        <Navbar></Navbar>
    </div>     
</template>

<script>
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from '../public/navbar.vue'

import Head from '../mine/head.vue'
import Bottom from '../mine/bottom.vue'
import Middle from '../mine/middle.vue'
export default {
    components:{
        Heador,
        Head,
        Middle,
        Bottom,
        Footer,
        Navbar
    }
}
</script>



