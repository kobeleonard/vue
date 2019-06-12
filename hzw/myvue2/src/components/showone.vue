<template>
    <div>

        <ul v-if="aa">
            <li>{{userone[0].id}}</li>
            <li>{{userone[0].name}}</li>
            <li>{{userone[0].nengli}}</li>
            <li>{{userone[0].jituan}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userone:[],
            aa:false,
        }
    },
    mounted(){
        var id = this.$route.params.id;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState == 4){
                var data=JSON.parse(xhr.responseText);
                this.userone=data;
                this.aa=true;
            }
        }
        xhr.open("get","http://localhost:1912/getone?"+id);
        // console.log(id);
        xhr.send();


    }

}
</script>

<style>

</style>
