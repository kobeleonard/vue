<template>
  <div>
    <input type="text" name="name" ref="name">
    <br>
    <input type="text" name="nengli" ref="nengli">
    <br>
    <input type="text" name="jituan" ref="jituan">
    <br>
    <input type="text" name="img" ref="img">
    <input type="button" value="提交" @click="post">
  </div>
</template>

<script>
export default {
  mounted() {
   

  },
  methods: {
    post: function() {
      var name = this.$refs.name.value;
      var nengli = this.$refs.nengli.value;
      var jituan = this.$refs.jituan.value;
      var img = this.$refs.img.value;
      // console.log(name);
       var xhr = new XMLHttpRequest();
    xhr.open('post','http://localhost:1912/adduser',true);
    // xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhr.send("name="+name+"&nengli="+nengli+"&jituan="+jituan+"&img="+img+new Date().getTime());
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          
          var aa = xhr.responseText;
          console.log(aa);
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
