<template>
  <div>
    <form v-if="aa">
      <input type="text" name="name" ref="name" :value="userone[0].name">
      <!-- {{userone}} -->
      <br>
      <input type="text" name="nengli" ref="nengli" :value="userone[0].nengli">
      <br>
      <input type="text" name="jituan" ref="jituan" :value="userone[0].jituan">
      <br>
      <input type="text" name="img" ref="img" :value="userone[0].img">
      <input type="button" value="提交" @click="post">
      </form>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      userone: [],
      aa: false
    };
  },
  mounted() {
    var id = this.$route.params.id;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText);
        this.userone = data;
        this.aa = true;
      }
    };
    xhr.open("get", "http://localhost:1912/getone?" + id);
    // console.log(id);
    xhr.send();
  },
methods: {
    post: function() {
        var id = this.$route.params.id;
      var name = this.$refs.name.value;
      var nengli = this.$refs.nengli.value;
      var jituan = this.$refs.jituan.value;
      var img = this.$refs.img.value;
    //   console.log(name);
       var xhr = new XMLHttpRequest();
    xhr.open('post','http://localhost:1912/edit?'+id,true);
    // console.log(id);
    // xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send("name="+name+"&nengli="+nengli+"&jituan="+jituan+"&img="+img+new Date().getTime());
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var aa = xhr.responseText;
        //   console.log(aa);
          if(aa==1){
              alert('添加成功');
              location.href="http://localhost:8081/#/";
          }
        
      }
    };
    }
  }
};
</script>

<style>
</style>
