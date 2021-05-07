<template>
    <el-footer id="indexFooter">
        <div id="footerContent">
            <div id="tip1">
                通信地址: 江西省南昌市-江西软件职业技术大学 邮编: 330041
            </div>
            <div id="tip2">
                &copy; 版权属于江西软件大学 2020-2021
            </div>
        </div>
    </el-footer>
</template>

<script>

export default {
    name: "Footer",
    
}
</script>

<style scoped>
    #indexFooter {
        margin-top: 50px;
    }
    
    #footerContent {
        text-align: center;
    }
    #tip1 {
        color: black;
    }
    #tip2 {
        font-size: 13px;
        color: gray;
        margin-top: 10px;
    }
</style>