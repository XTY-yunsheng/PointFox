<template>
    <div id="headerBook">
        <div id="message">
            <span>
                {{msg}}
            </span>
        </div>
        <div id="headerFunction">
            <router-link to="/register">
                <el-button type="primary">系统注册</el-button>
            </router-link>
            <router-link to="/login">
                <el-button type="primary">系统登录</el-button>
            </router-link>
            <router-link to="/work">
                <el-button type="primary">工作中心</el-button>
            </router-link>
            <router-link to="/info">
                <el-button type="primary">学生信息</el-button>
            </router-link>
            <router-link to="/manage">
                <el-button type="primary">图书管理</el-button>
            </router-link>
            <router-link to="/cnnode">
                <el-button type="primary">node论坛</el-button>
            </router-link>
            
        </div>
        
    </div>
    
</template>

<script>

export default {
    name: "Header",
    data(){
        return {
            msg: "江西软件大学--新型图书管理系统",
        }
    }
}
</script>

<style scoped>
    #message {
        float: left;
        width: 400px;
        height: 60px;
        color: white;
        line-height: 60px;
        font-size: 20;
        font-weight: bold;
    }
    #headerFunction {
        float: right;
        /* display: inline-block; */
        /* width: 200px; */
        height: 100%;
        /* background-color: green; */
        z-index: 10;
    }
    
     .el-button {
        display: inline-block;
        margin: 10px 0 0 10px;
        background-color: #0a9588;
        /* border-color: skyblue; */
    }
    
</style>