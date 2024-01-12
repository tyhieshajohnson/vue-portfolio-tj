<!-- HTML -->
<template>
      <!--  Card 1 -->
      <div class="card row col-md-4 mb-4" style="width: 18rem">
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(33.33% - 20px); 
  margin-bottom: 20px;
  box-sizing: border-box;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.card-body {
  text-align: center;
}

</style>