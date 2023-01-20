<div v-if="!contentIsLoaded" class="centered-position" style="width:100vw; height:80vh;  overflow-y:scroll; float:left; user-select:none; ">
  <div class="centered-position" style="width:1100px;  height:100%; background:rgba(6, 6, 6, 0.02); overflow:hidden; border-radius:20px; margin-top:2px; float:left; user-select:none; ">
    <div  style="width:25%; height:100%; margin-left:0%; float:left; ">
    </div>
    <div class="centered-position"  style="width:50%; height:100%; margin-left:0%; box-shadow:0px 0px 0px 1px #f1f1f1; float:left; ">
      <a-spin />
    </div>
    <div style="width:25%; height:100%; margin-left:0%; float:left; ">
    </div>
  </div>
</div>

<script>

export default {
  name: 'TopBarLoggedInWidget',
  props: {
    //message: Object,
    contentIsLoaded:Object
  },



</script>
