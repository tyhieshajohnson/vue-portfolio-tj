<!-- HTML -->
<template>
    <!--  Card 1 -->
    <div class="card row" style="width: 18rem">
      <img src="projects.image" class="card-img-top" alt="" />
      <div class="card-body col">
        <h5 class="card-title">{{ salaam.school}}</h5>
        <p class="card-text">{{ salaam.year }}</p>
        <p class="card-text">{{ salaam.field }}</p>
      </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default{
  props:["salaam"]
}

</script>

<!-- CSS -->
<style scoped>

</style>