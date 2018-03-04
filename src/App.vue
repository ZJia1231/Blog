<template>
  <div id="app">
    <el-container>
      <el-aside style="width:15%;position:fixed">
        <leftNav></leftNav>
      </el-aside>
      <el-container style="padding:0 1% 0 16%;">
        <el-main style="padding:0">
          <router-view></router-view>          
        </el-main>
        <el-footer style="height:30px;padding:0;">
          <appfooter></appfooter>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import appfooter from '@/components/common/appfooter'
export default {
  name: 'App',
  components: {
    leftNav,
    appfooter,
  },
  created: ()=> {
    window.addEventListener('blur',()=>{
      document.title = '(｡•́︿•̀｡)不要走嘛~';
    })
    window.addEventListener('focus',()=> {
      document.title = 'My Blog'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html,body,div,p {
  margin: 0;
  padding: 0;
}
</style>
