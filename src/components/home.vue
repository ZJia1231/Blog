<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px" style="padding-top:1em">
      <el-carousel-item v-for="item in 4">
        <img :src="'https://source.unsplash.com/random'">
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card"
    body-style='text-align:left;text-indent:2em;'
    >
      <div slot="header" class="clearfix">
        <router-link to='/'>文章标题</router-link>
      </div>
      <p style= 'word-break:break-all;font-size:18px;'>balababalabalababalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabala</p>
    </el-card>
    <el-card class="box-card"
    body-style='text-align:left;text-indent:2em;'
    >
      <div slot="header" class="clearfix">
        <router-link to='/'>文章标题</router-link>
      </div>
      <p style= 'word-break:break-all;font-size:18px;'>balababalabalababalabalababalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabala</p>
    </el-card>
    <el-card class="box-card"
    body-style='text-align:left;text-indent:2em;'
    >
      <div slot="header" class="clearfix">
        <router-link to='/'>文章标题</router-link>
      </div>
      <p style= 'word-break:break-all;font-size:18px;'>balababalabalabalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabalabalabalababalabalababalabalababalabala</p>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      
    }
  },
  methods:{
    
  },
  created: function () {
    this.$notify.info({
      message: 'Hello,这里还在建设中哦',
      showClose: false,
      duration:2000,
    })
  },
  mounted: function() {
    // axios({
    //   method: 'get',
    //   url: 'http://v.juhe.cn/toutiao/index',
    //   data: {
    //     type: 'top',
    //     key: 'a3d089e30c4173fac41764d9cdafc853',
    //   },
    //   headers: {
    //     'Accept':'*/*',
    //     'Accept-Encoding':'gzip, deflate, br',
    //     'Accept-Language':'zh-CN,zh;q=0.9',
    //     'Connection':'keep-alive',
    //     'Content-Length':'61',
    //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Cookie':'JuheChannel=jHbWFpbHFx; hasReg=reged; aliyungf_tc=AQAAADiJSkEjDwAAu+Gy3tiqNhCRuv9H; acw_tc=AQAAAOn2ZBlHXQEAu+Gy3pCMWCj4cfqq; PHPSESSID=iuqolvj7tghtamatms5n4dpse7; Hm_lvt_5d12e2b4eed3b554ae941c0ac43c330a=1518152811,1519562650,1519714524,1520008991; Hm_lvt_93d21520e8b1bde3d3c6a5deafa07651=1518152879,1519562724,1519732854,1520008994; Hm_lpvt_93d21520e8b1bde3d3c6a5deafa07651=1520010597; XSRF-TOKEN=eyJpdiI6InpDeVoyWmZsbFBYSTlnaFhLRWpKUnc9PSIsInZhbHVlIjoiNXlwY0hoR2lSN2RhYlExYnlQaGxGWHZDbk55MWdHRFJjbzNKU3RJXC9XYzc2MTJPMzVoM2N3UjdGcDdyNFZxcXZsS0hSazd3SCtmNUtkeWlZRXFyWmp3PT0iLCJtYWMiOiJhYTMwZDc3MTJjZDhhYzUxNzQ2ZGU5YmViMjk5ZDc4OTY3MTBiYjE5OWMxNGJlMjlhNjA0N2Y0NDdmZTQzNTEzIn0%3D; juhe_cn_session=eyJpdiI6InVCT1cyRUd2MUNOVEMrdURtWExyRFE9PSIsInZhbHVlIjoiOWRPRGIzY0h3QmR4cEtXMGxvcm1RR3RjN0tIRUpONUdEZk9Wb2poakNiQzVyMWpVOFRtRXArTjhwd0ZZbDBwSnZsUEV5aHVBdDh0ZDhobWR5cEhOOUE9PSIsIm1hYyI6ImQxNjFiOGFhYzZhYjA2MWRjODRiNjQzOTI1MDAwMTJjNTg1ZWZkMzJjNDA3ZTY5NjNhYWZlMDA3YmE4ZTk0YjAifQ%3D%3D; Hm_lpvt_5d12e2b4eed3b554ae941c0ac43c330a=1520011238',
    //     'Host':'www.juhe.cn',
    //     'Origin':'https://www.juhe.cn',
    //     'Referer':'https://www.juhe.cn/box/index/id/235',
    //     'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
    //     'X-Requested-With':'XMLHttpRequest',
    //   }
    // })
    // .then(function () {
    //   console.log('1');
      
    // })
    // .catch(function (error) {
    //   console.log('111');
    // })
  }
}
</script>

<style scoped>
.box-card {
  margin: 10px 0;
}
.el-carousel__item--card {
  border-radius: 20px;
}
a {
  text-decoration: none;
  color: #000;
}
</style>