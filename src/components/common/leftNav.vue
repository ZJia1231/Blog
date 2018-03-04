<template>
  <div class="left-nav">
        <img src="../../assets/head.jpg" class="head">
        <p style="padding-bottom:20px">{{ userName }}</p>
        <el-menu
        default-active="home"
        class="el-menu-vertical-demo"
        background-color="#04DEAD"
        text-color="#ccc"
        active-text-color="#fff">
        <router-link to='/'>
            <el-menu-item index="home">
                <i class="el-icon-location">主页</i>
            </el-menu-item>
        </router-link>
        <router-link to='/pic'>                
            <el-menu-item index="pic">
                <i class="el-icon-picture">图片</i>
            </el-menu-item>
        </router-link>
        <router-link to='/article'>
            <el-menu-item index="article">
                <i class="el-icon-document">文章</i>
            </el-menu-item>
        </router-link>
        <router-link to='/other'>                
            <el-menu-item index="other">
                <i class="el-icon-more">其他  </i>
            </el-menu-item>
        </router-link>
        </el-menu>
        <div class="date">
            <p>{{ date }}  {{ time }}</p>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'text',
            date:'',
            time:'',
            userName:'啊甲丶',
        }
    },
    created: function() {
    // 日期和时间
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        let hours,minutes,seconds;
        this.date = `${year}年${month}月${strDate}日`;
        let updateTime = ()=>{
            let date = new Date();
            hours = date.getHours();
            hours = hours<10 ? '0'+hours : hours;
            minutes = date.getMinutes() + 1;
            seconds = date.getSeconds();
            seconds = seconds<10 ? '0'+seconds : seconds;
            this.time = `${hours}:${minutes}:${seconds}`;
        }
        updateTime();
        setInterval(updateTime,1000);    
    },
    mounted: ()=> {
    }
}
</script>

<style scoped>
.left-nav {
    position: fixed;
    width:15%;
    height: 100%;
    background-color: #04DEAD;
    color: #fff;
}
.head {
    border-radius: 50%;
    padding: 20px 0 5px;
    width:50%;
}
.date {
    position: absolute;
    bottom: 6px;
    right: 6px;
    font-size: 1em;
}
</style>
