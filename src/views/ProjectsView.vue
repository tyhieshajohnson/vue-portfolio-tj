<!-- HTML -->
<template>
    <div>
        <!-- Navigation Bar -->
        <NavigationBar/>
        <div class="body vh-1000 w-100">
            <h1>HelloWorld</h1>
              <ProjectInfo v-for="project in projects" :key="project.id"/>
            <!-- Footer -->
            <Footer/>
        </div>
    </div>
</template>

<!-- JavaScript -->
<script>
import NavigationBar from '@/components/Reusables/Navigation.vue'
import Footer from '@/components/Reusables/Footer.vue'

export default {
    name: 'AboutView',
    components: {
    NavigationBar,
    Footer
    },
    computed:{
        projects(){
            return this.$store.state.projects

        }
    },
    mounted(){
        this.$store.dispatch("")
    },
    components: {ProjectInfo}
};
</script>

<!-- CSS -->
<style scoped>

.body {
    background-color: #202020;
    position: absolute; 
    z-index: -100;
    overflow: hidden;
 }
</style>
