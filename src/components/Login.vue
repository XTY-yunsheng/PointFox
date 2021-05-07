<template>
    <el-main id="indexMain">
        <el-card class="box-card" id="loginCard">
            <div slot="header" class="clearfix">
                <span>系统登录</span>
                <el-button style="float: right; padding: 3px 0" type="text">找回密码</el-button>
            </div>
            <div id="loginContent">
                <el-input placeholder="请输入账号" v-model="user.username" clearable></el-input>
                <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
                <el-button id="login" @click.native="loginSystem">登录</el-button>
            </div>
        </el-card>
    </el-main>
</template>

<script>
import Axios from 'axios';

export default {
    name: "Login",
    data(){
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods:{
        loginSystem(){
            Axios.get('http://localhost:3000/login', {
                params: this.user,
            }).then(function(response){
                alert(response.data.username);
                alert(response.data.password);
            })
        }
    }
}
</script>

<style scoped>
    #loginCard {
        width: 400px;
        margin: 0 auto;
        margin-top: 20px;
        /* background-color: rgba(88,222,111, 0.36); */
    }
    
    #loginContent>* {
        margin-top: 8px;
    }
    
    #loginContent {
        text-align: center;
    }
    
    #login {
        background-color: #0a9588;
        color: white;
        width: 150px;
        /* display: block; */
    }
</style>