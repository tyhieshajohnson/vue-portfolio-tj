<!-- HTML -->
<template>
    <!--  Card 1 -->
    <div class="card row" style="width: 18rem">
      <img :src="testimonial.image" class="card-img-top" alt="" />
      <div class="card-body col">
        <h5 class="card-title">{{ testimonial.name}}</h5>
        <p class="card-text">{{ testimonial.message }}</p>
        <p class="card-text">{{ testimonial.field }}</p>
      </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default{
  props:["testimonial"]
}
</script>

<!-- CSS -->
<style scoped>

</style>