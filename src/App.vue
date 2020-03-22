<template>
  <div id="app">
    <Header/>
    
    <router-view></router-view>

    <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch('autoLogin')
  }
}
</script>

<style>
</style>
