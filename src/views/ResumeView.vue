<!-- HTML -->
<template>
    <div>
        <!-- Navigation Bar -->
        <NavigationBar/>
        <div class="body vh-1000 w-100">
            <SalaamCard v-for="salaam in salaam" :key="salaam.id" :salaam="salaam"/>
            <!-- Footer -->
            <Footer/>
        </div>
    </div>
</template>

<!-- JavaScript -->
<script>
import NavigationBar from '@/components/Reusables/Navigation.vue'
import Footer from '@/components/Reusables/Footer.vue'
import SalaamCard from '@/components/Resume/SalaamCard.vue'

export default {
    name: 'AboutView',
    components: {
    NavigationBar,
    Footer,
    SalaamCard
  },
  computed: {
    salaam() {
        return this.$store.state.salaam;
    }
},
    mounted(){
        this.$store.dispatch("getSalaam")
    },
};
</script>

<!-- CSS -->
<style scoped>
.body {
    background-color: #202020;
    position: absolute; 
    z-index: -100;
 }
</style>