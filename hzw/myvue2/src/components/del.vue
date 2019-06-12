<template>
    <meta http-equiv="refresh" content="0;url=http://localhost:8081/#/">
</template>

<script>
export default {
   
    mounted(){
        var id = this.$route.params.id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
             if(xhr.readyState == 4){
                var data=JSON.parse(xhr.responseText);
                // if(data){
                    // alert("删除成功");location.href="/";
                // }

            }
        }
        xhr.open("get","http://localhost:1912/delete?"+id);
        // console.log(id);
        xhr.send();
    }
}
</script>

<style>

</style>
