<!-- HTML -->
<template>
      <!--  Card 1 -->
      <div class="card row" style="width: 18rem">
        <img src="projects.image" class="card-img-top" alt="" />
        <div class="card-body col">
          <h5 class="card-title">{{ project.heading}}</h5>
          <p class="card-text">{{ project.text }}</p>
          <a href="project.deploy" class="btn btn-primary">Netlify</a>
          <a href="project.github" class="btn btn-primary">Github</a>
        </div>
    </div>
</template>

<!-- JavaScript -->
<script>
export default{
    props:["project"]
}

</script>

<!-- CSS -->
<style scoped>

</style>