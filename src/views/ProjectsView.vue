<!-- HTML -->
<template>
  <div>
    <!-- Navigation Bar -->
    <NavigationBar />
    <div class="body vh-1000 w-100">
        <h1>Projects</h1>
        <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<!-- JavaScript -->
<script>
import NavigationBar from "@/components/Reusables/Navigation.vue";
import Footer from "@/components/Reusables/Footer.vue";
import ProjectCard from "@/components/Projects/ProjectCard.vue";

export default {
  name: "AboutView",
  components: {
    NavigationBar,
    Footer,
    ProjectCard,
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  mounted() {
    this.$store.dispatch("getProjects");
  },
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
  /* position: absolute; 
    z-index: -100; */
  overflow-x: hidden;
}
</style>
