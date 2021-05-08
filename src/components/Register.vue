<template>
    <el-main id="indexMain">
        <el-card class="box-card" id="registerCard">
            <div slot="header" class="clearfix">
                <span>系统注册</span>
                
            </div>
            <div id="registerContent">
                <el-input placeholder="请输入账号" v-model="user.username" clearable></el-input>
                <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
                <el-button id="register" @click.native="registerSystem">注册</el-button>
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
        registerSystem(){
            Axios.post('http://localhost:3000/register', {
                params: this.user,
            }).then(function(response){
                alert(response.data);
                //alert(response.data.password);
            })
        }
    }
}
</script>

<style scoped>
    #registerCard {
        width: 400px;
        margin: 0 auto;
        margin-top: 20px;
        /* background-color: rgba(88,222,111, 0.36); */
    }
    
    #registerContent>* {
        margin-top: 8px;
    }
    
    #registerContent {
        text-align: center;
    }
    
    #register {
        background-color: #0a9588;
        color: white;
        width: 150px;
        /* display: block; */
    }
</style>