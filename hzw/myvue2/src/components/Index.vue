<template>
    <div>
        <h1>海贼王</h1>
        <a href="#/add">添加用户</a>
            <table border="1" >
                <tr>
                    <td>编号</td>
                    <td>名称</td>
                    <td>能力</td>
                    <td>团体</td>
                    <td>图片</td>
                    <td>操作</td>
                </tr>
                <tr v-for=" (v) in userdata" v-bind:key="v.id">
                    <td>{{v.id}}</td>
                    <td>{{v.name}}</td>
                    <td>{{v.nengli}}</td>
                    <td>{{v.jituan}}</td>
                    <td><img :src="'http://localhost:1912/'+ v.img"  width="50" height="50" alt=""></td>
                    <td>
                        <a :href="'#/showone/id='+v.id">查看</a>
                        <a :href="'#/del/id='+ v.id">删除</a>
                        <a :href="'#/update/id='+v.id">修改</a>
                    </td>
                </tr>
            </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userdata:[],
        }
    },
    mounted(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState == 4){
                // console.log(xhr.responseText);
                var d = JSON.parse(xhr.responseText);
                // console.log(d);
                this.userdata = d;
            }
        }
        xhr.open("get","http://localhost:1912");
        xhr.send();

    }
}
</script>

<style>
    
</style>
